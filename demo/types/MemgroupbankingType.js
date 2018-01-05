var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemgroupbankingType = new GraphQLObjectType({
    name: 'Memgroupbanking',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgroupbankingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bankAccountName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accountType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bankNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            routingNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accountNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payFromInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            payToInd: {
                type: GraphQLInt,
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

            changeUserId: {
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

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            bankingAcctChecksumInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            bankAccountNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemgroupbankingType);
module.exports = MemgroupbankingType;