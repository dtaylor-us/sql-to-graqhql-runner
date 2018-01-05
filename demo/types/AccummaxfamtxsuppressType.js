var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AccummaxfamtxsuppressType = new GraphQLObjectType({
    name: 'Accummaxfamtxsuppress',
    description: '@TODO DESCRIBE ME',

    fields: function getAccummaxfamtxsuppressFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            accumMaxFamTxid: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumMaxFamId: {
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

registerType(AccummaxfamtxsuppressType);
module.exports = AccummaxfamtxsuppressType;