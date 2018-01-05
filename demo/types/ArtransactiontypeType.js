var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ArtransactiontypeType = new GraphQLObjectType({
    name: 'Artransactiontype',
    description: '@TODO DESCRIBE ME',

    fields: function getArtransactiontypeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            arTransTypeDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            flatContribLabel: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fusContribLabel: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contributor: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allowedInd: {
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

            sendToScInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            reportContribGroup: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sendCacToScInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            efundsActionTypePos: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            efundsActionTypeNeg: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pbmRtbeEventCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pbmRtbeRequestCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ArtransactiontypeType);
module.exports = ArtransactiontypeType;