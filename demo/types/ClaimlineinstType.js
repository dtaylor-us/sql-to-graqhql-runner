var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimlineinstType = new GraphQLObjectType({
    name: 'Claimlineinst',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimlineinstFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            revenueCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procCodeTypeRaw: {
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

            accomodationRate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceUnits: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            localUse49: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineNoteType: {
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

            originPostalCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineCancelReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            hippsCode: {
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

            totalProvRespAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            unitOfMeasurement: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalNonCoveredAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dateOfServiceFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dateOfServiceThru: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lineItemControlNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceTaxAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            facilityTaxAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxLinkSequenceNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxPrescriptionNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxNationalDrugCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxUnitOfMeasurement: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxQuantity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            delegatedMemberBenefitId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            asSubmittedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            lineItemControlId: {
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
            },

            pricingDosLineClass: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            renderingClaimProviderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            renderingClaimProvider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            renderingClaimProviderAddressId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerLocationAffiliationId: {
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
            }
        };
    }
});

registerType(ClaimlineinstType);
module.exports = ClaimlineinstType;