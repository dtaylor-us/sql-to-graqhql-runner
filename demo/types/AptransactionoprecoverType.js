var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AptransactionoprecoverType = new GraphQLObjectType({
    name: 'Aptransactionoprecover',
    description: '@TODO DESCRIBE ME',

    fields: function getAptransactionoprecoverFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            apTransactionOpid: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            overpaymentRecoveredAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recoveryDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            arTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            arTransactionDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recoveryApTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recoveryClaimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recoveryClaimLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimLineAdjudicationId: {
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

registerType(AptransactionoprecoverType);
module.exports = AptransactionoprecoverType;