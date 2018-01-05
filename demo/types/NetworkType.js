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

var NetworkType = new GraphQLObjectType({
    name: 'Network',
    description: '@TODO DESCRIBE ME',

    fields: function getNetworkFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            networkDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            alphaParentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            childInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            networkPricingAdministration: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            doNotSellDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            effectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expirationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            networkTermReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            networkName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            excludeContractFinPenInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            excludeContractMedNecessityInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adminResponsibleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            excludeProviderTermFulfillInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            benefitplancodes: {
                type: new GraphQLList(getType('Benefitplancode')),
                description: 'Benefitplancodes belonging to this Network',
                resolve: getEntityResolver('Benefitplancode'),

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

            benelanguageschedtexts: {
                type: new GraphQLList(getType('Benelanguageschedtext')),
                description: 'Benelanguageschedtexts belonging to this Network',
                resolve: getEntityResolver('Benelanguageschedtext'),

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

            networkauditdetails: {
                type: new GraphQLList(getType('Networkauditdetail')),
                description: 'Networkauditdetails belonging to this Network',
                resolve: getEntityResolver('Networkauditdetail'),

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

registerType(NetworkType);
module.exports = NetworkType;