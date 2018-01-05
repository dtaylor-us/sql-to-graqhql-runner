var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AccumbypassplanType = new GraphQLObjectType({
    name: 'Accumbypassplan',
    description: '@TODO DESCRIBE ME',

    fields: function getAccumbypassplanFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            accumBypassId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            member: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            planId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberBenefitId: {
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

            dedBypassGoalAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oopBypassGoalAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stoplossBypassGoalAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxBypassGoalAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxBypassGoalCount: {
                type: GraphQLString,
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

            subscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            bypassId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            beneAccumBypassType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleOptionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AccumbypassplanType);
module.exports = AccumbypassplanType;