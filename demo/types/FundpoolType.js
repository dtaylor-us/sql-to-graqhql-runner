var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FundpoolType = new GraphQLObjectType({
    name: 'Fundpool',
    description: '@TODO DESCRIBE ME',

    fields: function getFundpoolFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            fundName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fundEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fundExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fundStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            enableMinInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            fundMinimumAmt: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            minThresholdAction: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apOverflowFundId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            enableMaxInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            fundMaxAmt: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxThresholdAction: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            arOverflowFundId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            extFundingInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            fundingEntityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fundingEntityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            departmentCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityLocationNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            fundBaselineAmt: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            replenishmentAmt: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            replenishmentFreq: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            weekBillDay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            biweekBillDay1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            biweekBillDay2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            monthlyBillDay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            quarterlyBillMonth: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            quarterlyBillDay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            enableManualApInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimSchedFreq: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            weekClaimDay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            biweekClaimDay1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            biweekClaimDay2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            monthlyClaimDay: {
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

registerType(FundpoolType);
module.exports = FundpoolType;