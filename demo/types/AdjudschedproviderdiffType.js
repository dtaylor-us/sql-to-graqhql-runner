var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AdjudschedproviderdiffType = new GraphQLObjectType({
    name: 'Adjudschedproviderdiff',
    description: '@TODO DESCRIBE ME',

    fields: function getAdjudschedproviderdiffFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            difProvTinName: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difProvTinAddrLine1: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difProvTinCity: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difProvTinState: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difProvTinPostalCode: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difProvNameLast: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difProvNameFirst: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difProvNameMiddle: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difProvOrganizationName: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difProvAddressLine1: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difProvCity: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difProvState: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difProvPostalCode: {
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
            }
        };
    }
});

registerType(AdjudschedproviderdiffType);
module.exports = AdjudschedproviderdiffType;