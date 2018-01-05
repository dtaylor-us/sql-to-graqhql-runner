var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var RulelogType = new GraphQLObjectType({
    name: 'Rulelog',
    description: '@TODO DESCRIBE ME',

    fields: function getRulelogFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            ruleServiceName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

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

            ruleCriteriaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ruleTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eventType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eventDetail: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ruleLogHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(RulelogType);
module.exports = RulelogType;