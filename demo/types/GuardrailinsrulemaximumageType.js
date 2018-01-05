var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var GuardrailinsrulemaximumageType = new GraphQLObjectType({
    name: 'Guardrailinsrulemaximumage',
    description: '@TODO DESCRIBE ME',

    fields: function getGuardrailinsrulemaximumageFields() {
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

            insuringRuleAgeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            extendNetworkInd: {
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
            },

            guardrailInsRuleDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maximumAgeCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxAgeRelationshipType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(GuardrailinsrulemaximumageType);
module.exports = GuardrailinsrulemaximumageType;