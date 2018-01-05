var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimheadercobType = new GraphQLObjectType({
    name: 'Claimheadercob',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimheadercobFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            oicInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oicWriteoffAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oicPatientRespAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oicPaidAmt: {
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

            oicBilledAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oicAllowedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oicNoncoveredAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oicDeductibleAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oicCopaymentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oicCoinsuranceAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oicPatientPaidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimheadercobType);
module.exports = ClaimheadercobType;