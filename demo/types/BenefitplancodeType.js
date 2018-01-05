var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BenefitplancodeType = new GraphQLObjectType({
    name: 'Benefitplancode',
    description: '@TODO DESCRIBE ME',

    fields: function getBenefitplancodeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            benefitCodeDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benCodeCoverage: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            autoAdjudicate: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            benWaitingPeriod: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            benWaitingPeriodDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            openEnrollmentWaiver: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            bornInPlanWaiver: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dateOfHireWaiver: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitFromDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitThruDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            genderLimit: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            relationshipLimit: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            benefitCodeEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitCodeExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitPoints: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerDesignation: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitPeriodCalculationBasis: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitFromLcd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitThruLcd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            networkId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            network: {
                type: getType('Network'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Network')
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

registerType(BenefitplancodeType);
module.exports = BenefitplancodeType;