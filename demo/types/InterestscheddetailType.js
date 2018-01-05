var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var InterestscheddetailType = new GraphQLObjectType({
    name: 'Interestscheddetail',
    description: '@TODO DESCRIBE ME',

    fields: function getInterestscheddetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            interestSchedId: {
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

            interestDiscountType: {
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

            maxInterestAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            interestRateType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            primeRateDateBasis: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            roundingRule: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            timeRoundingRule: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxInterestLimitInd: {
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

            deleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(InterestscheddetailType);
module.exports = InterestscheddetailType;