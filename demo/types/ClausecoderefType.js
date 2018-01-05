var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClausecoderefType = new GraphQLObjectType({
    name: 'Clausecoderef',
    description: '@TODO DESCRIBE ME',

    fields: function getClausecoderefFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            clinicalDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            clauseProvision: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            categoryDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            inactiveInd: {
                type: GraphQLInt,
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

            clauseCodeSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            clauseCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClausecoderefType);
module.exports = ClausecoderefType;