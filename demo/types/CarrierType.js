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

var CarrierType = new GraphQLObjectType({
    name: 'Carrier',
    description: '@TODO DESCRIBE ME',

    fields: function getCarrierFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            carrierName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            businessUrl: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            natlProviderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            natlProvider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
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

            hmoInd: {
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

            adminResponsibleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            carrierBusinessId: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            carrierauditdetails: {
                type: new GraphQLList(getType('Carrierauditdetail')),
                description: 'Carrierauditdetails belonging to this Carrier',
                resolve: getEntityResolver('Carrierauditdetail'),

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

            carrierlineofbusinesses: {
                type: new GraphQLList(getType('Carrierlineofbusiness')),
                description: 'Carrierlineofbusinesses belonging to this Carrier',
                resolve: getEntityResolver('Carrierlineofbusiness'),

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

            memberbenefits: {
                type: new GraphQLList(getType('Memberbenefit')),
                description: 'Memberbenefits belonging to this Carrier',
                resolve: getEntityResolver('Memberbenefit'),

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

registerType(CarrierType);
module.exports = CarrierType;