var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AccumoopfamplanType = new GraphQLObjectType({
    name: 'Accumoopfamplan',
    description: '@TODO DESCRIBE ME',

    fields: function getAccumoopfamplanFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            accumOopFamId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberBenefitId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stoplossOopid: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitPeriodStartDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitPeriodEndDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            controlPlanInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            shareBasePlanAccumInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            controlPlanId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oopGoalAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stoplossGoalAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oopGoalCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            stoplossGoalCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            stoplossAccumulationCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oopAccumulationCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            familyUnitScheduleLevel: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            appliedProrationPct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carryoverMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractPlanOptionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleOptionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            familyOopAccumType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            slFamilyAccumType: {
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

registerType(AccumoopfamplanType);
module.exports = AccumoopfamplanType;