var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AcctbalarType = new GraphQLObjectType({
    name: 'Acctbalar',
    description: '@TODO DESCRIBE ME',

    fields: function getAcctbalarFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            arTransactionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contribEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contributor: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transactionAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            actualCreditAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            familyUnitScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            familyLevel: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            contribLevel: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            activeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deletedInd: {
                type: GraphQLInt,
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

            timelineDebitInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AcctbalarType);
module.exports = AcctbalarType;