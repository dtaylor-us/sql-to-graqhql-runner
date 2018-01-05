var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BenetierprovType = new GraphQLObjectType({
    name: 'Benetierprov',
    description: '@TODO DESCRIBE ME',

    fields: function getBenetierprovFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            beneTierId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitPlanVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerAssignmentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            openAccessPeriod: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            openAccessPeriodDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            electiveChangeFreq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            electiveChangeFreqDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            electiveChangeRule: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            electiveChangeRuleDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            genderLimit: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitFromYears: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitFromMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitThruYears: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitThruMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            referralSensitivity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            optionalAssignment: {
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

registerType(BenetierprovType);
module.exports = BenetierprovType;