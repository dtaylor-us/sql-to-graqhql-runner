var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProvcontractType = new GraphQLObjectType({
    name: 'Provcontract',
    description: '@TODO DESCRIBE ME',

    fields: function getProvcontractFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            provContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contractVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            provContractHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contractClaimType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processOrderNumber: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            contractDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            versionStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contractTermReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimProcessStartDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reciprocityInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            overpaymentRecoveryInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            recoveryWaitPeriod: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            recoveryWaitPeriodType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recoveryDeadlinePeriod: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            recoveryDeadlinePeriodType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            discountNonCoveredInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            documentControlNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerAssignmentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fundingSource: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            checkAddressInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkAllNetworkInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkAllCarrierInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkLineOfBusinessInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkProductInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkProvContractTinInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkPlanInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkAffiliationInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkTaxonomyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkFinancialPenaltyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkFilingLimitInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkSupportTeamInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkContractOwnerInd: {
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

            promptPaySchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            activationDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deactivationDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkMemberGroupInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkMedPolicyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ruleSetName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ProvcontractType);
module.exports = ProvcontractType;