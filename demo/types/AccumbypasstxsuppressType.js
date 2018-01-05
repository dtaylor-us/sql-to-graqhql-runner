var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AccumbypasstxsuppressType = new GraphQLObjectType({
    name: 'Accumbypasstxsuppress',
    description: '@TODO DESCRIBE ME',

    fields: function getAccumbypasstxsuppressFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            accumBypassTxid: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumBypassId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AccumbypasstxsuppressType);
module.exports = AccumbypasstxsuppressType;