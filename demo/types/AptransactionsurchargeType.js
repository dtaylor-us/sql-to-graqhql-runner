var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AptransactionsurchargeType = new GraphQLObjectType({
    name: 'Aptransactionsurcharge',
    description: '@TODO DESCRIBE ME',

    fields: function getAptransactionsurchargeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            apTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surchargeSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            surchargeAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            surchargeRateApplied: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            surchargeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            regEntityGuardrailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            invalidInd: {
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

registerType(AptransactionsurchargeType);
module.exports = AptransactionsurchargeType;