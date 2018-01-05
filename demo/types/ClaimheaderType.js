var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimheaderType = new GraphQLObjectType({
    name: 'Claimheader',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimheaderFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            dcnId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            icn: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dueDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dateOfServiceStart: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dateOfServiceEnd: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            member: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            patientAcctNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameLastSub: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memNameSuffix: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tplInvestigationId: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            eoiInvestigationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            preExInvestigationId: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            userClaimCancelCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            systemClaimCancelCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitsAssignDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimSubmitter: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimSource: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            icpParStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dftPayMbr: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            extSuppressEobInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            totalBilledAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalFundHoldAmount: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            privacyType: {
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

            noSignatureInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            noFamMemberInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            shortNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            extBatchId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            balExchangeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupCacClaimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sourceFileType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimSourceType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerTier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ediTokenId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimXrefId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bypassAcctType1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bypassAcctType2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bypassAcctType3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bypassAcctType4: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bypassAcctType5: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrierSeqId: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            interestApplInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            subsOverrideDepInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            imageId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalProvRespAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerOrgId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            foreignCurrencyCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            posCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimFrequencyCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            specialProgramCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            delayReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimRepricerReceivedDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            repricedClaimNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adjustedRepricedClaimNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAuthExcepCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalMemPaidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerOriginalControlNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cliaNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            networkTraceNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medicalRecordNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            demonstrationProjectId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            releaseInfoCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            releaseInfoDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorAuthNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitsAssignType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            acceptAssignment: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fln: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            foreignClaimInd: {
                type: GraphQLInt,
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

            contractClaimType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimSubmissionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeLocId: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            payeeId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planId: {
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

            preliminaryParStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingDosType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingDos: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prepricedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimStatusLastUpdateDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentClaimProviderAddressId: {
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

            cowClaimInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            previousClaimStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            icnForCancelEnvelope: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimheaderType);
module.exports = ClaimheaderType;