var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimlinerxType = new GraphQLObjectType({
    name: 'Claimlinerx',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimlinerxFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            rxServRefNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxServRefNumQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxWrittenDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dateOfService: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxFillNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxQtyDispensed: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxDaysSupply: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxOrigin: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            posCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxCompInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxDawCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxPriorAuthNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxPriorAuthType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxPrescriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxPrescriberNameLast: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxPrescriberPhone: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxPrescriberIdQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxIngredCostSub: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxIngredCostBasis: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxDispFeeSub: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxIncentiveAmtSub: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxOtherAmtSub: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxOtherAmtSubQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxTaxAmtSub: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxGrossAmtSub: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxPatientPaidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxOtherPaidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxOtherPaidAmtQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceLineNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            svcLineStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transferLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            invoiceAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            diagnosisInd1: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            diagnosisInd2: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            diagnosisInd3: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            diagnosisInd4: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimLineCancelReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            writeOffAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            drugName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pharmacyName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            strength: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            therapeuticClassCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalPaidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalBenefitPaidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalAccountPaidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalCobPaidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalNonrecoupMrAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalMemRespAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fundHoldAmount: {
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

            noReceiptInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            incompleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dosageType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            brandGenDiffAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bypassGraceDollars: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pharmacyOverpayment: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            totalProvRespAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimXrefId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalExternalCarrierPaidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalExternalCarrierMemRespAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalExternalCarrierProvRespAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalLineNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimlinerxType);
module.exports = ClaimlinerxType;