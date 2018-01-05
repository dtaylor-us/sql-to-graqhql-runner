var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimeventType = new GraphQLObjectType({
    name: 'Claimevent',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimeventFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimEnvelopeId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            promptPayDueDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            uncleanTimeSeconds: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentProcessingSeconds: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentDeliverySeconds: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            daysUntilInterest: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            postReleaseResubmitInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimEventSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            splitFromClaimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimSource: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            extSysType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            splitToClaimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cancelInd: {
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

            originalReceiptDate: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cirrusReceiptDate: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adjudicationDate: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimEventType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimEventSubType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            internalAdjustReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            manualAdjustmentSource: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adjustmentReceiptDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            holdForReviewInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimeventType);
module.exports = ClaimeventType;