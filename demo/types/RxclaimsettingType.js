var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var RxclaimsettingType = new GraphQLObjectType({
    name: 'Rxclaimsetting',
    description: '@TODO DESCRIBE ME',

    fields: function getRxclaimsettingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            rxAttachInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxCobPaymentsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxManualPricingInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxCompoundInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxFl2Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxDaysSuppliedReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxOriginReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxProductIdQualReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxDawCodeReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxPriorAuthNumReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxPriorAuthTypeReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxPrescriberNameReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxPrescIdQualReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxIngredCostSubReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxIngredBasisCostReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxDispFeeSubReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxIncentiveAmtSubReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxOtherAmtSubReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxSalesTaxSub: {
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
            }
        };
    }
});

registerType(RxclaimsettingType);
module.exports = RxclaimsettingType;