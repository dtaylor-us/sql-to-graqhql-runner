var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClabenefituseroverrideType = new GraphQLObjectType({
    name: 'Clabenefituseroverride',
    description: '@TODO DESCRIBE ME',

    fields: function getClabenefituseroverrideFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claBenefitUserOverrideSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimLineAdjudicationId: {
                type: GraphQLString,
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

            benefitCodeOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitCodeOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tierNumberOverride: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            tierNumberOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerDesignationOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerDesignationOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            delegationEntityTypeOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            delegationEntityIdOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            delegationOverrideCapDeductInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            delegationOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            salesTaxReductAmtOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            salesTaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            salesTaxOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricedAmtOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricedAmtDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricedAmtOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benCodeRulesOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveFilingPenaltyAllowedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveFilingPenaltyAllowedDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveFilingPenaltyAllowedOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveAuthPenaltyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveAuthPenaltyOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authPenaltyAllowedReductAmtOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authPenaltyAllowedDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authPenaltyAllowedOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveMaximumsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveCopayInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            copayReductAmtOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            copaymentDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            copaymentOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveDeductibleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deductibleReductAmtOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deductibleDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deductibleOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveMemberCoinsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            carrierCoinsPctOverride: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memCoinsuranceReductAmtOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memCoinsuranceDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memCoinsuranceOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrierCoinsuranceDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrierCoinsuranceOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveCapitatedServiceInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            capitatedServiceReductAmtOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            capitatedServiceDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            capitatedServiceOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            noCobInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobAdjustmentAmtOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobAdjustmentDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobAdjustmentOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveProviderWithholdInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            providerWithholdAmtOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerWithholdDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerWithholdOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            umAuthIdOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            umAuthServiceIdorc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            umAuthServiceIdOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            umAuthIdorc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            umReferralIdOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            umReferralIdorc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dofrEntityTypeOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dofrEntityIdOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dofrOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            overrideSourceType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            revertToOriginalCalcInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memberBenefitId: {
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

            tradingPartnerTxType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            forwardToThisEntityInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            version: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            fullClaDenyReductAmtOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fullClaDenyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            fullClaDenyIndDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fullClaDenyIndOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tradingPartnerTxTypeOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            delegOverrideCapDeductInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            delegationDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            userOverrideReferralReqInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            userOverrideReferralReqOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            userOverrideAuthReqInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            userOverrideAuthReqOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            autoAdjudicateInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            splitContinuationClaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            userOverrideDisAuthFoundInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            userOverrideDisAuthFoundOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            userOverrideDisReferFoundInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            userOverrideDisReferFoundOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveFilingPenaltyBilledInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveFilingPenaltyBilledDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveFilingPenaltyBilledOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveFilingPenaltyPaidInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveFilingPenaltyPaidDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveFilingPenaltyPaidOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parentLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            disregardProvContractNetwrkAuthWaiverInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            disregardProvContractNetwrkAuthWaiverOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postDedCopayReductAmtOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postDedCopayReductAmtDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postDedCopayReductAmtOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waivePostDedCopayInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
                type: GraphQLString,
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

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClabenefituseroverrideType);
module.exports = ClabenefituseroverrideType;