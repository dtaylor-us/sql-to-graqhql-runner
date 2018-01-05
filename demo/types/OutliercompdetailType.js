var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var OutliercompdetailType = new GraphQLObjectType({
    name: 'Outliercompdetail',
    description: '@TODO DESCRIBE ME',

    fields: function getOutliercompdetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            outlierCategoryType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            periodType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            periodFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            periodThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            reimbDollarValue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reimbPercentValue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            greaterThanBilledInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
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

            thresholdDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            thresholdAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            thresholdMultiplier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            previousPeriodOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            calculationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            manualReviewInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            specialProcessingInst: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingServiceCategory: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            notToExceedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deleteInd: {
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

            thresholdDailyAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            wholeClaimReimbType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            comparePercentage: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            comparisonType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priority: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            outlierCompVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(OutliercompdetailType);
module.exports = OutliercompdetailType;