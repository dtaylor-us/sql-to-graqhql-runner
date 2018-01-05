var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AccummaxindivtxsuppressType = new GraphQLObjectType({
    name: 'Accummaxindivtxsuppress',
    description: '@TODO DESCRIBE ME',

    fields: function getAccummaxindivtxsuppressFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            accumMaxIndivTxid: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumMaxIndivId: {
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

registerType(AccummaxindivtxsuppressType);
module.exports = AccummaxindivtxsuppressType;