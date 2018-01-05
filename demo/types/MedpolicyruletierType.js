var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MedpolicyruletierType = new GraphQLObjectType({
    name: 'Medpolicyruletier',
    description: '@TODO DESCRIBE ME',

    fields: function getMedpolicyruletierFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            medPolicyRuleVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lateNotificationInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dollarsType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dollarsFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dollarsThru: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            occurrencesFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            occurrencesThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            daysFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            daysThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitFromDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitThruDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitFromLcd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitThruLcd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            daysInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            servicePerVisitCountFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            servicePerVisitCountThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            medPolicyCoverageRule: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allowReferralAsAuthInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            medPolicyPenaltyType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            penaltyFrequency: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            penaltyAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            penaltyOverflowInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            coinsuranceReductionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coinsurancePct: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ancillaryServicePenaltyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            innDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            penaltyManualReviewInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveReferralInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            bypassAuthDenialInd: {
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
            }
        };
    }
});

registerType(MedpolicyruletierType);
module.exports = MedpolicyruletierType;