var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimcobadjustmentType = new GraphQLObjectType({
    name: 'Claimcobadjustment',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimcobadjustmentFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimCobOtherSubscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            groupCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adjustmentReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adjustmentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adjustmentQty: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            totalPaidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorAuthNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimControlNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            remPatientLiabilityAmt: {
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

registerType(ClaimcobadjustmentType);
module.exports = ClaimcobadjustmentType;