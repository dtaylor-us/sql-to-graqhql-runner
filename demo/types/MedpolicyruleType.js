var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MedpolicyruleType = new GraphQLObjectType({
    name: 'Medpolicyrule',
    description: '@TODO DESCRIBE ME',

    fields: function getMedpolicyruleFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
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

            medPolicyRuleDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medPolicyRuleVersionStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medPolicyAttributionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            initiateRetroReviewInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            lateNotificationInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            medPolicyRulePeriodicity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            wholeClaimApplicabilityInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            minimumThresholdAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            minimumThresholdType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mgContractSitusState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerPracticeState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberResidenceState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            doNotAssignInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            assignedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            validInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            clinicalEfficiencyRateType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ruleServiceName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            minimumThresholdClaimApplicabilityType: {
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

registerType(MedpolicyruleType);
module.exports = MedpolicyruleType;