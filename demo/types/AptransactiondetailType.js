var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AptransactiondetailType = new GraphQLObjectType({
    name: 'Aptransactiondetail',
    description: '@TODO DESCRIBE ME',

    fields: function getAptransactiondetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            apTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineAdjudicationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            acctBalSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            timelineSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            apPayableAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalCreditAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            preFundedInd: {
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

            carryoverInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            acctBalSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benPeriodStartDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carryoverDrawFor: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paidFromFuture: {
                type: GraphQLInt,
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

            msaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msa: {
                type: getType('Msa'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Msa')
            },

            memberAccountId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            famMemberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            famMember: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            capitationRunDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            responsibleEntityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            responsibleEntityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            preliminaryTotalInterestAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionDetailType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalSurchargeAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AptransactiondetailType);
module.exports = AptransactiondetailType;