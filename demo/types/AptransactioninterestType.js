var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AptransactioninterestType = new GraphQLObjectType({
    name: 'Aptransactioninterest',
    description: '@TODO DESCRIBE ME',

    fields: function getAptransactioninterestFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            apTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            preliminaryInterestAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stateCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            interestPercentage: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            interestPenaltyType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pastDueDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            interestSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalReceiptDate: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            uncleanTimeSeconds: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            minThresholdAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            minThresholdMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxInterestLimitInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxInterestAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            charityInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            uncleanDaysApplyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            invalidInd: {
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

            stateTypeCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeEntityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimReplacementVersionNbr: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            interestSchedDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            interestSchedDetailDaysId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimEventPromptPayId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AptransactioninterestType);
module.exports = AptransactioninterestType;