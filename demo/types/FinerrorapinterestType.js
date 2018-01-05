var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FinerrorapinterestType = new GraphQLObjectType({
    name: 'Finerrorapinterest',
    description: '@TODO DESCRIBE ME',

    fields: function getFinerrorapinterestFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            apTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            interestSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimEventId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimEventPromptPayId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            promptPaySchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            promptPaySchedDetailId: {
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

            interestDiscountType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            interestRateType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            promptPayInterestRule: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            promptPayClockType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            minThresholdMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalReceiptDate: {
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

registerType(FinerrorapinterestType);
module.exports = FinerrorapinterestType;