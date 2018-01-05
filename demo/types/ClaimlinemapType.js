var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimlinemapType = new GraphQLObjectType({
    name: 'Claimlinemap',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimlinemapFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            alphaParentClaimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            alphaParentLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            parentClaimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parentLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            childClaimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            childLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            provLineItemControlNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            systemLineReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            userLineReasonCode: {
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
            }
        };
    }
});

registerType(ClaimlinemapType);
module.exports = ClaimlinemapType;