var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ArcreditreceiptType = new GraphQLObjectType({
    name: 'Arcreditreceipt',
    description: '@TODO DESCRIBE ME',

    fields: function getArcreditreceiptFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            arTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            arCreditDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            arCreditMode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            checkNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            checkAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            checkRoutingNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            checkDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eftTransId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eftTransDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerAddressLine1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerAddressLine2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerCity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerPostalCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerCountry: {
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

registerType(ArcreditreceiptType);
module.exports = ArcreditreceiptType;