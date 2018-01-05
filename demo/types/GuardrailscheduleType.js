var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var GuardrailscheduleType = new GraphQLObjectType({
    name: 'Guardrailschedule',
    description: '@TODO DESCRIBE ME',

    fields: function getGuardrailscheduleFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            guardrailScheduleName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            guardrailLongDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            guardrailType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            scheduleStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            assignedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            validationState: {
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

            entityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(GuardrailscheduleType);
module.exports = GuardrailscheduleType;