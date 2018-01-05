var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClabenefitdeductibleType = new GraphQLObjectType({
    name: 'Clabenefitdeductible',
    description: '@TODO DESCRIBE ME',

    fields: function getClabenefitdeductibleFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            userOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            preliminaryDeductibleReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveDeductibleOopAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveDeductibleStoplossAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveDeductibleEocAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveDeductibleEtBenefitAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deductAppliedToOopAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carryoverApplicabilityInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deductBypassAccumAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deductibleBypassPreviouslySatisfiedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deductiblePreviouslySatisfiedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deductibleSatisfiedWithThisClaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deductibleBypassReachedThisClaInd: {
                type: GraphQLInt,
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

            waiveDeductMaxMemCostShare: {
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

registerType(ClabenefitdeductibleType);
module.exports = ClabenefitdeductibleType;