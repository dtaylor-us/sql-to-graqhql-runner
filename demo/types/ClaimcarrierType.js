var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimcarrierType = new GraphQLObjectType({
    name: 'Claimcarrier',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimcarrierFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            carrierCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cycleDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fileRecCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            fileLoadCount: {
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
            },

            dropCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            recycleCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimcarrierType);
module.exports = ClaimcarrierType;