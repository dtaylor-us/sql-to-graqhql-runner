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

var RegionType = new GraphQLObjectType({
    name: 'Region',
    description: '@TODO DESCRIBE ME',

    fields: function getRegionFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            regionCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            regionDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            regionDisplayName: {
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

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
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

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            anesthesiacomps: {
                type: new GraphQLList(getType('Anesthesiacomp')),
                description: 'Anesthesiacomps belonging to this Region',
                resolve: getEntityResolver('Anesthesiacomp'),

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

            serviceareapostals: {
                type: new GraphQLList(getType('Serviceareapostal')),
                description: 'Serviceareapostals belonging to this Region',
                resolve: getEntityResolver('Serviceareapostal'),

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

registerType(RegionType);
module.exports = RegionType;