var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var GuardrailinsruleterminationType = new GraphQLObjectType({
    name: 'Guardrailinsruletermination',
    description: '@TODO DESCRIBE ME',

    fields: function getGuardrailinsruleterminationFields() {
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

            useMemberGroupExpDateTypeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            termExpireDateType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            useTermDateInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            termDateDayCountRangeMin: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            termDateDayCountRangeMax: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            termDayCountRelationshipType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            termDayCountSelection: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            termDateRelationshipType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            useReceiptDateInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            receiptDayCountRangeMin: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            receiptDayCountRangeMax: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            receiptDayCountRelationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            receiptDayCountSelection: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            receiptDateRelationshipType: {
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

            terminationRuleType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defaultInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(GuardrailinsruleterminationType);
module.exports = GuardrailinsruleterminationType;