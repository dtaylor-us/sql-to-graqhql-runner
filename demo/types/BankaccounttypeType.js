var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BankaccounttypeType = new GraphQLObjectType({
    name: 'Bankaccounttype',
    description: '@TODO DESCRIBE ME',

    fields: function getBankaccounttypeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            paperCheckInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            debitCardInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cardVendor: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lineOfCreditType: {
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

registerType(BankaccounttypeType);
module.exports = BankaccounttypeType;