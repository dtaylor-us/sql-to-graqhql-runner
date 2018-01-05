var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AuthprogramtypeType = new GraphQLObjectType({
    name: 'Authprogramtype',
    description: '@TODO DESCRIBE ME',

    fields: function getAuthprogramtypeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            authMatchingSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authProgramType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            programDetailType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            orderSequenceNumber: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            createUserId: {
                type: GraphQLString,
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

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AuthprogramtypeType);
module.exports = AuthprogramtypeType;