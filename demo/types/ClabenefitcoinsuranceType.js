var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClabenefitcoinsuranceType = new GraphQLObjectType({
    name: 'Clabenefitcoinsurance',
    description: '@TODO DESCRIBE ME',

    fields: function getClabenefitcoinsuranceFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            userOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            alterCoinsTriggerEocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            etCarrierCoinsOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            carrierCoinsPct: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memCoinsPct: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            preliminaryCoinsReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveCoinsOopAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveCoinsStoplossAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveCoinsEocAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coinsAppliedToOopAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carryoverApplicabilityInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveOopBypassAccumAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oopBypassReachedThisClaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oopBypassPreviouslySatisfiedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oopSatisfiedWithThisClaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oopPreviouslySatisfiedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveCoinsMaxMemCostShare: {
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
            }
        };
    }
});

registerType(ClabenefitcoinsuranceType);
module.exports = ClabenefitcoinsuranceType;