var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemgrouppayrollType = new GraphQLObjectType({
    name: 'Memgrouppayroll',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgrouppayrollFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
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

            payrollFrequency: {
                type: GraphQLString,
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

            weeklyPayDay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            monthlyPayDay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            semiMonthlyPayDay1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            semiMonthlyPayDay2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            biWeeklyStartDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            initialPayrollDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemgrouppayrollType);
module.exports = MemgrouppayrollType;