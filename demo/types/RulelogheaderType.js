var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var RulelogheaderType = new GraphQLObjectType({
    name: 'Rulelogheader',
    description: '@TODO DESCRIBE ME',

    fields: function getRulelogheaderFields() {
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

            ruleTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            startTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            returnValue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            data: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            elapsedTime: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            runDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(RulelogheaderType);
module.exports = RulelogheaderType;