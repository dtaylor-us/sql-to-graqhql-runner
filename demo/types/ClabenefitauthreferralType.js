var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClabenefitauthreferralType = new GraphQLObjectType({
    name: 'Clabenefitauthreferral',
    description: '@TODO DESCRIBE ME',

    fields: function getClabenefitauthreferralFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            userOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveAuthReqEocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveReferralReqEocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            userOverrideAuthReqInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            userOverrideReferralReqInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            umReferralId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            umAuthId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authPenaltyDollars: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authProgramType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authMatchingInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            authMatchingSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            referralFoundInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimReferralMatchInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            appliedAuthPenaltyReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            appliedOverPenaltyReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalAuthPenaltyReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authPenaltyOverflowInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            overflowPenaltyAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimAuthMatchInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            authFoundInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            userAuthSelectionInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            userReferralSelectionInd: {
                type: GraphQLInt,
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

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveAuthReqProvInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveAuthExclPlaceOfServiceCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveReferralReqProvInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveRefExclPlaceOfServiceCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planMedPolicySetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerContractReferralWaiverAppliedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            authRequiredInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            medPolicyRuleVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medPolicyRuleTierId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authAppliedToClaimInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            authDecisionActionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authWaiverAppliedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            contractMedPolicySetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            networkMedPolicySetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coinsPenaltyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            coinsPenaltyUnits: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coinsPenaltyPercent: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            coinsPenaltyPercentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servicePerVisitCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            occurrencesPerVisitCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            medPolicyRuleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medPolicyRule: {
                type: getType('Rule'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Rule')
            },

            medPolicyRuleBasedReferralWaiverInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            umAuthServiceId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            matchingMedicalPolicyRuleFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalDaysPerAdmit: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            occurrencesPerCalYear: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClabenefitauthreferralType);
module.exports = ClabenefitauthreferralType;