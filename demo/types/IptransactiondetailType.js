var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var IptransactiondetailType = new GraphQLObjectType({
    name: 'Iptransactiondetail',
    description: '@TODO DESCRIBE ME',

    fields: function getIptransactiondetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
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

            ipPayableAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalCreditAmt: {
                type: GraphQLString,
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

            penaltyBasisAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionId: {
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

registerType(IptransactiondetailType);
module.exports = IptransactiondetailType;