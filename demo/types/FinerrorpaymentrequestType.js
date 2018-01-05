var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FinerrorpaymentrequestType = new GraphQLObjectType({
    name: 'Finerrorpaymentrequest',
    description: '@TODO DESCRIBE ME',

    fields: function getFinerrorpaymentrequestFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            ledgerActivityLogId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            clearinghouseClaimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            requestStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            httpResponseCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentRequestErrorCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            date: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            transId: {
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

registerType(FinerrorpaymentrequestType);
module.exports = FinerrorpaymentrequestType;