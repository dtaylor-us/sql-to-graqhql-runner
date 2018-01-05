var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AuthprogramauthcharorderType = new GraphQLObjectType({
    name: 'Authprogramauthcharorder',
    description: '@TODO DESCRIBE ME',

    fields: function getAuthprogramauthcharorderFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            authProgramAuthProcCodeMatchId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authMatchingSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authProgramTypeId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authProgramAuthServiceTypeId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            crossWalkInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            characterMatchType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            characterMatch: {
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

registerType(AuthprogramauthcharorderType);
module.exports = AuthprogramauthcharorderType;