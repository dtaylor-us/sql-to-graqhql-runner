var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FinerrorqueueType = new GraphQLObjectType({
    name: 'Finerrorqueue',
    description: '@TODO DESCRIBE ME',

    fields: function getFinerrorqueueFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            errorStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finErrorQueueChildId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finErrorType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finErrorCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finErrorMessage: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finActionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lockUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lockDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            resolutionNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            resolutionDateTime: {
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

registerType(FinerrorqueueType);
module.exports = FinerrorqueueType;