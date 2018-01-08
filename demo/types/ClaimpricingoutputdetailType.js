var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimpricingoutputdetailType = new GraphQLObjectType({
    name: 'Claimpricingoutputdetail',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimpricingoutputdetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimPricingOutputHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimPricingInputHeaderId: {
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

            pricingSchedOrderDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonPricingSchedOrderDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            editCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            holdCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            vendorId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            vendor: {
                type: getType('Vendor'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Vendor')
            },

            vendorRemarkCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingComponentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingComponentVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            manualReviewInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            basePricedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            notToExceedReductionAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierMatchType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            netModifierReductionAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procCodeMissingInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            multipleProcedureReductionAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calledCompPricedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calledCompPctReductionAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transferPricingReductionAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sameDayExceptionReductionAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            caseRateReductionAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            aggregateBilledAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            componentPricedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricedPercentReductionAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            greaterThanBilledInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            gtbReductionAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            linePricedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            aggregateAllowedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            aggregateAllowedIncrease: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apcPricedReductionAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apcPricedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billedReducePctAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billedAdjustmentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parentLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            outlierParentLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            outlierCompVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            outlierPricingServiceCategory: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            outlierAggregateBilledAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            outlierBasePriceAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            outlierGtbReductionAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postOutlierPricedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            outlierPricedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            secondDollarInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            notEligibleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pricingServiceCategory: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apcBasePricedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finalPricedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            networkCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apportionedAppliedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            apportionedPricedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apportionedAdjPricedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberAgeAtDosFromLcd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            sameDayExceptionInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            outlierBilledAdjustmentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingSchedOrderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureSetCatId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nonTerminalEditCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fallThruPercent: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonPricingServiceType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonPricingServiceTypeAdjPct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mprCompVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mprType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            outlierApportionedBilledAdjAmt: {
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

            apportionedBilledAdjAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            vendorActionCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            outlierGreaterThanBilledInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            priceAppliedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            caseRateInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            vendorManualReviewInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            externalVendorId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalVendor: {
                type: getType('Vendor'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Vendor')
            },

            pricingReturnCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            exceptionCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rejectCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            incidentalLineInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimpricingoutputdetailType);
module.exports = ClaimpricingoutputdetailType;