var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaeocrelatedlogoverrideType = new GraphQLObjectType({
    name: 'Claeocrelatedlogoverride',
    description: '@TODO DESCRIBE ME',

    fields: function getClaeocrelatedlogoverrideFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            denyServiceEocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            sameTierAsTriggerClaimInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            triggerClaimTierNumber: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            elevateToHighestInnTierInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            elevateToLowestInnTierInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            highestInnTierWithAreaMatchInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            lowestInnTierWithAreaMatchInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveCopayEocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            alterCopayTriggerEocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            triggerClaimPerUnitCopayAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            alterCoinsTriggerEocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            triggerClaimCarrierCoinsPct: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            triggerClaimMemCoinsPct: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ignoreOccurMaxEocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ignoreDollarMaxEocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveDeductibleEocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveMemCoinsEocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveAuthReqEocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveReferralReqEocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveAllMemCostShareEocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allowBilledChargeEocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            benCodeOverrideEocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            benefitCode: {
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
            },

            invalidBeneCodeForTierChgInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaeocrelatedlogoverrideType);
module.exports = ClaeocrelatedlogoverrideType;