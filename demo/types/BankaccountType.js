var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BankaccountType = new GraphQLObjectType({
    name: 'Bankaccount',
    description: '@TODO DESCRIBE ME',

    fields: function getBankaccountFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            accountEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accountExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accountType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            creditCardNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            securityNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lineOfCreditInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkNumberInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            firstCheckNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            lastCheckNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            entityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payToInd: {
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
            }
        };
    }
});

registerType(BankaccountType);
module.exports = BankaccountType;