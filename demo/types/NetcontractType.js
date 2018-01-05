var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var NetcontractType = new GraphQLObjectType({
    name: 'Netcontract',
    description: '@TODO DESCRIBE ME',

    fields: function getNetcontractFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            netContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contractVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            netContractHeaderId: {
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

            contractDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            discountNonCoveredInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pricingSetId: {
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

            checkPlanInd: {
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

            checkSupportTeamInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkFilingLimitInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkProviderInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkProviderAddressInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkNetworkInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkDofrInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkDelegationInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkContractOwnerInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            documentControlNumber: {
                type: GraphQLString,
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

            delegSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            checkMemberGroupInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dofrSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            netContractType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            checkServiceAreaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(NetcontractType);
module.exports = NetcontractType;