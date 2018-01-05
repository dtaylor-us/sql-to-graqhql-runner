var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var GuardrailinsrulewaitperiodType = new GraphQLObjectType({
    name: 'Guardrailinsrulewaitperiod',
    description: '@TODO DESCRIBE ME',

    fields: function getGuardrailinsrulewaitperiodFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            guardrailScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            guardrailInsuringRuleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            guardrailInsuringRule: {
                type: getType('Rule'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Rule')
            },

            qualifyingEventType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waitingPeriodType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waitingPeriodDayCount: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waitingPeriodDurationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waitingPeriodMonthCount: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            orientationPeriodDurationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            orientationPeriodDayCount: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            orientationPeriodMonthCount: {
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

            guardrailInsRuleDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waitingPeriodDayCountMax: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waitingPeriodDayCountMin: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(GuardrailinsrulewaitperiodType);
module.exports = GuardrailinsrulewaitperiodType;