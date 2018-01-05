var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimlineicpType = new GraphQLObjectType({
    name: 'Claimlineicp',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimlineicpFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
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

            icpMemCoinsAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            icpMemCopayAmt: {
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

            balExchangeAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            employeeDiscountAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ptRespAfterDiscAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            icpParStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimlineicpType);
module.exports = ClaimlineicpType;