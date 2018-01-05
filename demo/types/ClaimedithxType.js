var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimedithxType = new GraphQLObjectType({
    name: 'Claimedithx',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimedithxFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimEditId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            editDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            editLockUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            editLockDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processTime: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            resolutionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            resolutionCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fromClaimEditId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            routeMessage: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            routeReturn: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            routeRespMessage: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adjudScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fulfillTemplateId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            variableContentId: {
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

            requestStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimedithxType);
module.exports = ClaimedithxType;