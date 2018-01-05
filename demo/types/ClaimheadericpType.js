var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimheadericpType = new GraphQLObjectType({
    name: 'Claimheadericp',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimheadericpFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            icpWriteOffAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            icpPatientRespAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            icpPaidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            icpCoveredAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            icpMemDedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            icpMemCopayAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            icpMemCoinsAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            icpCobPaidAmt: {
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
            },

            icpParStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimheadericpType);
module.exports = ClaimheadericpType;