var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClabenefitallowedType = new GraphQLObjectType({
    name: 'Clabenefitallowed',
    description: '@TODO DESCRIBE ME',

    fields: function getClabenefitallowedFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            userOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            primaryHealthPlanAllowedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            greaterThanBilledInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allowBilledChargeEocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pricingSetVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimPricingOutputHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimPricingOutputDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stoplossBypassPrevSatisfiedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            stoplossPrevSatisfiedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allowedAppliedToStoplossAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stoplossBypassReachedThisClaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            stoplossSatisfiedThisClaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveStoplossBypassAccumAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nonCoveredAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allowedUnits: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nonCoveredUnits: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            clinicalEditMultiProcReductInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pricingSchedMultiProcReductInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            benePlanMultiProcReductInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            multiProcReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billedAdjustAmt: {
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
            },

            oonPricingSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonPricingSchedVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parentLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            applyApportionmentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClabenefitallowedType);
module.exports = ClabenefitallowedType;