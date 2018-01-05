var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ExpensecodeType = new GraphQLObjectType({
    name: 'Expensecode',
    description: '@TODO DESCRIBE ME',

    fields: function getExpensecodeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            descriptionText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            requireProviderInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            finActivityCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procInstr: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitType: {
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

            medRxInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ExpensecodeType);
module.exports = ExpensecodeType;