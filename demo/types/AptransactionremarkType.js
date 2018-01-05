var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AptransactionremarkType = new GraphQLObjectType({
    name: 'Aptransactionremark',
    description: '@TODO DESCRIBE ME',

    fields: function getAptransactionremarkFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            apTransactionDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionReductionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionInterestId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionSurchargeId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            remarkCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recipientType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claDenyId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            remarkCodeTriggerId: {
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

registerType(AptransactionremarkType);
module.exports = AptransactionremarkType;