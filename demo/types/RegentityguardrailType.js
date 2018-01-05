var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var RegentityguardrailType = new GraphQLObjectType({
    name: 'Regentityguardrail',
    description: '@TODO DESCRIBE ME',

    fields: function getRegentityguardrailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            regEntityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            regEntityGuardrailName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            longDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            effectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expirationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            regionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            state: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            productType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fundingSource: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            exchangeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            groupIndivType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            groupSizeFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            groupSizeThru: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            groupCountType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            familyUnitScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            grandfatherDate: {
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

            privacyAgeThresholdYears: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            privacyAgeThresholdMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memStateEtInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            provStateEtInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxBillableDependents: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surchargeSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            promptPaySchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            guardrailScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dateType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            employeeCountType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            timelyFilingSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(RegentityguardrailType);
module.exports = RegentityguardrailType;