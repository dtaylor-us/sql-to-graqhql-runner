var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var CapscheduleType = new GraphQLObjectType({
    name: 'Capschedule',
    description: '@TODO DESCRIBE ME',

    fields: function getCapscheduleFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            scheduleDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            capCalculationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bandPmpmCapInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pmpmFlatCap: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            percentPremCap: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            percentPremType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            baseRate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            assignedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            auditOnlyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            capWithholdPct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            capThresholdAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memThresholdAmt: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            capThresholdAction: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            capGuaranteeAmt: {
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

registerType(CapscheduleType);
module.exports = CapscheduleType;