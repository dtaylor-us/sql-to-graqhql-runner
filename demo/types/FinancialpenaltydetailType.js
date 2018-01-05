var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FinancialpenaltydetailType = new GraphQLObjectType({
    name: 'Financialpenaltydetail',
    description: '@TODO DESCRIBE ME',

    fields: function getFinancialpenaltydetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            tableNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            penaltyType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            penaltyMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            daysFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dayTo: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            priorityNumber: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adjustmentPercentage: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adjustmentAmount: {
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

            methodType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            penaltyAdjustmentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(FinancialpenaltydetailType);
module.exports = FinancialpenaltydetailType;