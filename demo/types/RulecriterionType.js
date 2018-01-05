var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var RulecriterionType = new GraphQLObjectType({
    name: 'Rulecriterion',
    description: '@TODO DESCRIBE ME',

    fields: function getRulecriterionFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            ruleCriteriaType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ruleCriteriaInit: {
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

            ruleServicePropertyId: {
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
            }
        };
    }
});

registerType(RulecriterionType);
module.exports = RulecriterionType;