var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClabenefitType = new GraphQLObjectType({
    name: 'Clabenefit',
    description: '@TODO DESCRIBE ME',

    fields: function getClabenefitFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memberBenefitId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitPlanVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tierNumber: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            codeLevel: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            version: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            noCobInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            billedAndTaxAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            duplicateServiceReductionAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fullClaDenyReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            delegationReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benCodeCovReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            filingPenaltyBilledReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            salesTaxReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            excessAllowedReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allowedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            exemptFromReductionPayableAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benCodeRulesReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            filingPenaltyAllowedReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authPenaltyAllowedReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            occurBasedMaxReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            copayReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deductibleReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postDedCopayReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memCoinsuranceReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prelimNetPayAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            promptPayDiscountReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            filingPenaltyPaidReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dollarBasedMaxReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            capitatedServiceReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobAdjustmentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobSavingDrawAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            overpayRecoveryAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerWithholdAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finalAllowedOccurQty: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            effectiveExcessAllowedAmt: {
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

registerType(ClabenefitType);
module.exports = ClabenefitType;