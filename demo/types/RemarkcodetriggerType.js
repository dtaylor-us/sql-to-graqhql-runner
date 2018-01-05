var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var RemarkcodetriggerType = new GraphQLObjectType({
    name: 'Remarkcodetrigger',
    description: '@TODO DESCRIBE ME',

    fields: function getRemarkcodetriggerFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            remarkCodeScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            remarkCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            writeoffInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            copaymentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            coinsuranceInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deductibleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adjustmentInd: {
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

            payeeProviderInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            payeeMemberInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            manualInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            recoupGeneratedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claDeniedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pendUntilFundedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            effectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expirationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            remarkTriggerType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            episodeOfCareInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            clinicalEditApplicationInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            assignedProviderInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            bypassInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobReserveDrawInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            thirdPartyPayeeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            fulfillTemplateId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            variableContentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            remarkCodeTriggerDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deductiblePrevSatisfiedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deductibleSatisfiedThisClaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deductibleBypassPrevReachedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deductibleBypassReachedThisClaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            stoplossPrevSatisfiedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            stoplossSatisfiedThisClaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            stoplossBypassPrevReachedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            stoplossBypassReachedThisClaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oopPrevSatisfiedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oopSatisfiedThisClaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oopBypassPrevReachedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oopBypassReachedThisClaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            interestInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surchargeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            providerParStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitTierParStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planYearType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobCoverageType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            govtBenefitType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adjustmentReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            remittanceAdviceRemarkCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            groupCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            splitFromInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            splitToInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(RemarkcodetriggerType);
module.exports = RemarkcodetriggerType;