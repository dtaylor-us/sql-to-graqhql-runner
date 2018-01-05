var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BenefitplanType = new GraphQLObjectType({
    name: 'Benefitplan',
    description: '@TODO DESCRIBE ME',

    fields: function getBenefitplanFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            planId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            productVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benPlanEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benPlanExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mbrClaimFilingLimit: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            filingLimitDuration: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            filingLimitDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fileLimitPenaltyPct: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            fileLimitPenaltyAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            filingLimitType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            activationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deactivationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            origActivationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            origDeactivationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benPlanStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            validInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            benefitType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            relationshipLimit: {
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

            dofrConfigurationLevel: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fundingSource: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            riderOnlyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            groupIndivType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            govtBenefitType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            metallicLevel: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            riderBenefitType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            doNotSellDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lastEnrollDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            includeChildMgInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            enforceNetworkSelectionInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            excludeExtraterrBenefitsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            twentyFourHourCoverageInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            doNotRenewDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            delegationConfigLevel: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalPlanInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            benefitPeriodCalculationBasis: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            templateInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            delegSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billByNetworkInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            revenueArrangement: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            validationJobSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dofrSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(BenefitplanType);
module.exports = BenefitplanType;