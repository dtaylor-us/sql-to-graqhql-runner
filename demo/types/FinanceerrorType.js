var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FinanceerrorType = new GraphQLObjectType({
    name: 'Financeerror',
    description: '@TODO DESCRIBE ME',

    fields: function getFinanceerrorFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            financeErrorDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            financeErrorDisplay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            financeErrorProcess: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            configurationLocation: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            startDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            endDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(FinanceerrorType);
module.exports = FinanceerrorType;