var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FinerrorapsurchargeType = new GraphQLObjectType({
    name: 'Finerrorapsurcharge',
    description: '@TODO DESCRIBE ME',

    fields: function getFinerrorapsurchargeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            apTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            surchargeSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            surchargeSchedRateId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionSurchargeId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            regEntityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            regEntityGuardrailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            surchargeRate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            surchargeAmt: {
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

registerType(FinerrorapsurchargeType);
module.exports = FinerrorapsurchargeType;