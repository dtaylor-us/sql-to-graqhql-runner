var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AccummaxindivplanType = new GraphQLObjectType({
    name: 'Accummaxindivplan',
    description: '@TODO DESCRIBE ME',

    fields: function getAccummaxindivplanFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            accumMaxIndivId: {
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

            maximumId: {
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

            maxBodyPartType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxEventType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bodyPartLimitInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            sideOfBody: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            toothId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tooth: {
                type: getType('Tooth'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Tooth')
            },

            maxAccumulationLimitAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxOccurrenceLimitCount: {
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

            benefitBundleOptionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subscriberId: {
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

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AccummaxindivplanType);
module.exports = AccummaxindivplanType;