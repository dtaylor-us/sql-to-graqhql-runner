var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClabenefitcopaymentType = new GraphQLObjectType({
    name: 'Clabenefitcopayment',
    description: '@TODO DESCRIBE ME',

    fields: function getClabenefitcopaymentFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            userOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            perUnitCopayAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            copayCount: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            preliminaryCopayReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveCopayEocAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveCopayEtBenefitAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveCopayWithBenefitAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveCopayDurationAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveMaxCopaymentsAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveCopayOopAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveCopayStoplossAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            copayAppliedToDeductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            copayAppliedToOopAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            copaymentReductionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveOopBypassAccumAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oopBypassReachedThisClaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oopBypassPreviouslySatisfiedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oopSatisfiedWithThisClaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oopPreviouslySatisfiedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveCopayMaxMemCostShare: {
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

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
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

registerType(ClabenefitcopaymentType);
module.exports = ClabenefitcopaymentType;