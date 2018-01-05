var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ArtransactiondetailType = new GraphQLObjectType({
    name: 'Artransactiondetail',
    description: '@TODO DESCRIBE ME',

    fields: function getArtransactiondetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            arTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            arCreditAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postedPaymentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            overpaidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorBalDropAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorBalDropApTxId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prefundRepaymentAmt: {
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

            overflowAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ArtransactiondetailType);
module.exports = ArtransactiondetailType;