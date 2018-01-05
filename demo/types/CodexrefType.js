var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var CodexrefType = new GraphQLObjectType({
    name: 'Codexref',
    description: '@TODO DESCRIBE ME',

    fields: function getCodexrefFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            xRefSystem: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            xRefApi: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            xRefAttributeName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            xRefDirection: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            xRefFromValue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            xRefToValue: {
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

registerType(CodexrefType);
module.exports = CodexrefType;