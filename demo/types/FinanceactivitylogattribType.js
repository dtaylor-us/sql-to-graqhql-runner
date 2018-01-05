var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FinanceactivitylogattribType = new GraphQLObjectType({
    name: 'Financeactivitylogattrib',
    description: '@TODO DESCRIBE ME',

    fields: function getFinanceactivitylogattribFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            financeActivityLogAttribSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            financeActivityLogId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionAttribId: {
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

registerType(FinanceactivitylogattribType);
module.exports = FinanceactivitylogattribType;