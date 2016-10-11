function ejemplo(scope) {
    prettyLog(initializeDirectiveBindings.toString());
}
run();
// Set up $watches for isolate scope and controller bindings. This process
// only occurs for isolate scopes and new scopes with controllerAs.
function initializeDirectiveBindings(scope, attrs, destination, bindings, directive) {
    var removeWatchCollection = [];
    var initialChanges = {};
    var changes;
    forEach(bindings, function initializeBinding(definition, scopeName) {
        var attrName = definition.attrName,
            optional = definition.optional,
            mode = definition.mode, // @, =, <, or &
            lastValue,
            parentGet, parentSet, compare, removeWatch;

        switch (mode) {

            case '@':
                if (!optional && !hasOwnProperty.call(attrs, attrName)) {
                    destination[scopeName] = attrs[attrName] = void 0;
                }
                attrs.$observe(attrName, function (value) {
                    if (isString(value) || isBoolean(value)) {
                        var oldValue = destination[scopeName];
                        recordChanges(scopeName, value, oldValue);
                        destination[scopeName] = value;
                    }
                });
                attrs.$$observers[attrName].$$scope = scope;
                lastValue = attrs[attrName];
                if (isString(lastValue)) {
                    // If the attribute has been provided then we trigger an interpolation to ensure
                    // the value is there for use in the link fn
                    destination[scopeName] = $interpolate(lastValue)(scope);
                } else if (isBoolean(lastValue)) {
                    // If the attributes is one of the BOOLEAN_ATTR then Angular will have converted
                    // the value to boolean rather than a string, so we special case this situation
                    destination[scopeName] = lastValue;
                }
                initialChanges[scopeName] = new SimpleChange(_UNINITIALIZED_VALUE, destination[scopeName]);
                break;

            case '=':
                if (!hasOwnProperty.call(attrs, attrName)) {
                    if (optional) break;
                    attrs[attrName] = void 0;
                }
                if (optional && !attrs[attrName]) break;

                parentGet = $parse(attrs[attrName]);
                if (parentGet.literal) {
                    compare = equals;
                } else {
                    compare = function simpleCompare(a, b) { return a === b || (a !== a && b !== b); };
                }
                parentSet = parentGet.assign || function () {
                    // reset the change, or we will throw this exception on every $digest
                    lastValue = destination[scopeName] = parentGet(scope);
                    throw $compileMinErr('nonassign',
                        "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!",
                        attrs[attrName], attrName, directive.name);
                };
                lastValue = destination[scopeName] = parentGet(scope);
                var parentValueWatch = function parentValueWatch(parentValue) {
                    if (!compare(parentValue, destination[scopeName])) {
                        // we are out of sync and need to copy
                        if (!compare(parentValue, lastValue)) {
                            // parent changed and it has precedence
                            destination[scopeName] = parentValue;
                        } else {
                            // if the parent can be assigned then do so
                            parentSet(scope, parentValue = destination[scopeName]);
                        }
                    }
                    return lastValue = parentValue;
                };
                parentValueWatch.$stateful = true;
                if (definition.collection) {
                    removeWatch = scope.$watchCollection(attrs[attrName], parentValueWatch);
                } else {
                    removeWatch = scope.$watch($parse(attrs[attrName], parentValueWatch), null, parentGet.literal);
                }
                removeWatchCollection.push(removeWatch);
                break;

            case '<':
                if (!hasOwnProperty.call(attrs, attrName)) {
                    if (optional) break;
                    attrs[attrName] = void 0;
                }
                if (optional && !attrs[attrName]) break;

                parentGet = $parse(attrs[attrName]);

                var initialValue = destination[scopeName] = parentGet(scope);
                initialChanges[scopeName] = new SimpleChange(_UNINITIALIZED_VALUE, destination[scopeName]);

                removeWatch = scope.$watch(parentGet, function parentValueWatchAction(newValue, oldValue) {
                    if (oldValue === newValue) {
                        if (oldValue === initialValue) return;
                        oldValue = initialValue;
                    }
                    recordChanges(scopeName, newValue, oldValue);
                    destination[scopeName] = newValue;
                }, parentGet.literal);

                removeWatchCollection.push(removeWatch);
                break;

            case '&':
                // Don't assign Object.prototype method to scope
                parentGet = attrs.hasOwnProperty(attrName) ? $parse(attrs[attrName]) : noop;

                // Don't assign noop to destination if expression is not valid
                if (parentGet === noop && optional) break;

                destination[scopeName] = function (locals) {
                    return parentGet(scope, locals);
                };
                break;
        }
    });

    function recordChanges(key, currentValue, previousValue) {
        if (isFunction(destination.$onChanges) && currentValue !== previousValue) {
            // If we have not already scheduled the top level onChangesQueue handler then do so now
            if (!onChangesQueue) {
                scope.$$postDigest(flushOnChangesQueue);
                onChangesQueue = [];
            }
            // If we have not already queued a trigger of onChanges for this controller then do so now
            if (!changes) {
                changes = {};
                onChangesQueue.push(triggerOnChangesHook);
            }
            // If the has been a change on this property already then we need to reuse the previous value
            if (changes[key]) {
                previousValue = changes[key].previousValue;
            }
            // Store this change
            changes[key] = new SimpleChange(previousValue, currentValue);
        }
    }

    function triggerOnChangesHook() {
        destination.$onChanges(changes);
        // Now clear the changes so that we schedule onChanges when more changes arrive
        changes = undefined;
    }

    return {
        initialChanges: initialChanges,
        removeWatches: removeWatchCollection.length && function removeWatches() {
            for (var i = 0, ii = removeWatchCollection.length; i < ii; ++i) {
                removeWatchCollection[i]();
            }
        }
    };
}