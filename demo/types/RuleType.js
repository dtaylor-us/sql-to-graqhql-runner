var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLList = GraphQL.GraphQLList;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var RuleType = new GraphQLObjectType({
    name: 'Rule',
    description: '@TODO DESCRIBE ME',

    fields: function getRuleFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            ruleServiceName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ruleName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            configurationStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            returnValue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ruleCriteriaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            replacedBy: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            historicalInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ownerGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adjudschedsettingssystems: {
                type: new GraphQLList(getType('Adjudschedsettingssystem')),
                description: 'Adjudschedsettingssystems belonging to this Rule',
                resolve: getEntityResolver('Adjudschedsettingssystem'),

                args: {
                    limit: {
                        name: 'limit',
                        type: GraphQLInt
                    },

                    offset: {
                        name: 'offset',
                        type: GraphQLInt
                    }
                }
            },

            guardrailinsruleretros: {
                type: new GraphQLList(getType('Guardrailinsruleretro')),
                description: 'Guardrailinsruleretros belonging to this Rule',
                resolve: getEntityResolver('Guardrailinsruleretro'),

                args: {
                    limit: {
                        name: 'limit',
                        type: GraphQLInt
                    },

                    offset: {
                        name: 'offset',
                        type: GraphQLInt
                    }
                }
            },

            guardrailinsrulewaitperiods: {
                type: new GraphQLList(getType('Guardrailinsrulewaitperiod')),
                description: 'Guardrailinsrulewaitperiods belonging to this Rule',
                resolve: getEntityResolver('Guardrailinsrulewaitperiod'),

                args: {
                    limit: {
                        name: 'limit',
                        type: GraphQLInt
                    },

                    offset: {
                        name: 'offset',
                        type: GraphQLInt
                    }
                }
            },

            guardrailinsruleterminations: {
                type: new GraphQLList(getType('Guardrailinsruletermination')),
                description: 'Guardrailinsruleterminations belonging to this Rule',
                resolve: getEntityResolver('Guardrailinsruletermination'),

                args: {
                    limit: {
                        name: 'limit',
                        type: GraphQLInt
                    },

                    offset: {
                        name: 'offset',
                        type: GraphQLInt
                    }
                }
            },

            medpolicyschedtimelinerules: {
                type: new GraphQLList(getType('Medpolicyschedtimelinerule')),
                description: 'Medpolicyschedtimelinerules belonging to this Rule',
                resolve: getEntityResolver('Medpolicyschedtimelinerule'),

                args: {
                    limit: {
                        name: 'limit',
                        type: GraphQLInt
                    },

                    offset: {
                        name: 'offset',
                        type: GraphQLInt
                    }
                }
            },

            ruleassigns: {
                type: new GraphQLList(getType('Ruleassign')),
                description: 'Ruleassigns belonging to this Rule',
                resolve: getEntityResolver('Ruleassign'),

                args: {
                    limit: {
                        name: 'limit',
                        type: GraphQLInt
                    },

                    offset: {
                        name: 'offset',
                        type: GraphQLInt
                    }
                }
            },

            rulecriteria: {
                type: new GraphQLList(getType('Rulecriterion')),
                description: 'Rulecriteria belonging to this Rule',
                resolve: getEntityResolver('Rulecriterion'),

                args: {
                    limit: {
                        name: 'limit',
                        type: GraphQLInt
                    },

                    offset: {
                        name: 'offset',
                        type: GraphQLInt
                    }
                }
            }
        };
    }
});

registerType(RuleType);
module.exports = RuleType;