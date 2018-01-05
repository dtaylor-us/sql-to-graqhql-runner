var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimpricingediType = new GraphQLObjectType({
    name: 'Claimpricingedi',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimpricingediFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
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

            pricingMethodologyCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allowedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            savingsAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            organizationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rateAmount: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            approvedDrgCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            approvedDrgAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rejectReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            policyComplianceCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            networkExceptionCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            productServiceIdQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            productServiceId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            approvedServiceUnitCount: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            repricedLineItemRefNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adjRepricedLineItemRefNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            unitOfMeasurement: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            approvedRevenueCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            repricedClaimNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adjustedRepricedClaimNum: {
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

registerType(ClaimpricingediType);
module.exports = ClaimpricingediType;