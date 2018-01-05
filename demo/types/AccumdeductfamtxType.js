var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AccumdeductfamtxType = new GraphQLObjectType({
    name: 'Accumdeductfamtx',
    description: '@TODO DESCRIBE ME',

    fields: function getAccumdeductfamtxFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            accumDeductFamId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumDeductIndivTxid: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            migrationBeginningBalanceInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            externalAccumInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimSource: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalClaimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nonClaimAdjustInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            accumAdjustmentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adjustmentDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineAdjudicationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            carryoverAccumInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dedAccumulationAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            member: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            carryoverAccumulationAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rebuildAdjustmentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            externalDosEnd: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalDosStart: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumMessageId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bundleCrossControlAccumInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundlePlanId: {
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
            },

            subscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxBypassAccumAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxBypassAccumCount: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            crossAccumInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dedOverageAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            overageRecoveryTxid: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AccumdeductfamtxType);
module.exports = AccumdeductfamtxType;