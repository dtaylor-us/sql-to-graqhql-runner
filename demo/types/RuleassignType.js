var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var RuleassignType = new GraphQLObjectType({
    name: 'Ruleassign',
    description: '@TODO DESCRIBE ME',

    fields: function getRuleassignFields() {
        return {
            ruleSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ruleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rule: {
                type: getType('Rule'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Rule')
            },

            executionOrderNum: {
                type: GraphQLInt,
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

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
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

            productionStart: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            productionEnd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            configurationStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            baseVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            plannedProdDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ruleServiceName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(RuleassignType);
module.exports = RuleassignType;