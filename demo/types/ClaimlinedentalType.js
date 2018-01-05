var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimlinedentalType = new GraphQLObjectType({
    name: 'Claimlinedental',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimlinedentalFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            dateOfService: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifier1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifier2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifier3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifier4: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceUnits: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            toothArch: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dentalQuadrant1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dentalQuadrant2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dentalQuadrant3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dentalQuadrant4: {
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

            billedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            taxAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLinePostage: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            descriptionText: {
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

            claimLineCancelReasonCode: {
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

            posCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prosthesisInlayCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorPlacementDateQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorPlacementDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            appliancePlacementDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            applianceReplacementDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            treatmentStartDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            treatmentEndDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lineItemControlNum: {
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

            bypassGraceDollars: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            bypassCarryoverInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            totalProvRespAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lineItemControlId: {
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

registerType(ClaimlinedentalType);
module.exports = ClaimlinedentalType;