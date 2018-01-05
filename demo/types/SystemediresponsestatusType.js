var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SystemediresponsestatusType = new GraphQLObjectType({
    name: 'Systemediresponsestatus',
    description: '@TODO DESCRIBE ME',

    fields: function getSystemediresponsestatusFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            systemEdiResponseLoopId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stcElementLevel: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimStatusCategory: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimStatusEntity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rejectReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            followupActionCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            responseCode: {
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

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(SystemediresponsestatusType);
module.exports = SystemediresponsestatusType;