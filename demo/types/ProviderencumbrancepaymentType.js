var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProviderencumbrancepaymentType = new GraphQLObjectType({
    name: 'Providerencumbrancepayment',
    description: '@TODO DESCRIBE ME',

    fields: function getProviderencumbrancepaymentFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            providerId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            providerEncumbranceId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            activitySequenceNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payableSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkNum: {
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

registerType(ProviderencumbrancepaymentType);
module.exports = ProviderencumbrancepaymentType;