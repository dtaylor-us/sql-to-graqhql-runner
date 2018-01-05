var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimpricingexternalresphdrType = new GraphQLObjectType({
    name: 'Claimpricingexternalresphdr',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimpricingexternalresphdrFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimPricingExternalRequestId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingSystemId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingSystemName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalAllowedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            baseReimbursementAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalOutlierAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalCopaymentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalDeductibleAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricerType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            grouperType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            grouperVersionNumber: {
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

            drgCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            drgRate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            drgWeight: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimpricingexternalresphdrType);
module.exports = ClaimpricingexternalresphdrType;