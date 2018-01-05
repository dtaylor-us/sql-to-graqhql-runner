var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var PromptpayscheddetailType = new GraphQLObjectType({
    name: 'Promptpayscheddetail',
    description: '@TODO DESCRIBE ME',

    fields: function getPromptpayscheddetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            promptPaySchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimSubmitter: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allClaimSubmitterInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            parStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allParStatusTypeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimSubmissionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allClaimSubmissionTypeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimEventType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allClaimEventTypeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            promptPayDaysType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            promptPayCalendarDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            promptPayBusinessDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            minClaimThresholdPct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            minClaimThresholdPenalty: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            minClaimPenaltyType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxDecisionDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxDecisionAction: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            promptPayClockType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            resetClockAfterPendResponseInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            startClockOnPendEditInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            includePaymentDeliveryTimeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            promptPayPenaltyType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            interestScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            interestPayeeType: {
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

            subType: {
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

registerType(PromptpayscheddetailType);
module.exports = PromptpayscheddetailType;