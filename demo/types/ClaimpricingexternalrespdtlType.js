var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimpricingexternalrespdtlType = new GraphQLObjectType({
    name: 'Claimpricingexternalrespdtl',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimpricingexternalrespdtlFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimPricingExternalRespHdrId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimLineAllowedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            baseRate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            discountPercent: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            discountAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            outlierAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            copaymentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deductibleAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            packagedChargesAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            weight: {
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

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimPricingInputHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimPricingOutputHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimPricingExternalRequestId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingReturnCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingReturnType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            networkCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rejectCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            exceptionCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimpricingexternalrespdtlType);
module.exports = ClaimpricingexternalrespdtlType;