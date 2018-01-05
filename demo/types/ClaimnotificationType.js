var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimnotificationType = new GraphQLObjectType({
    name: 'Claimnotification',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimnotificationFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            subNameFirst: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            inProcessInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            inProcessSuccessDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            inProcessFailDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            awaitingFundsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            awtFundSuccessDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            awaitFundsFailDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            processedSuccessDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processedFailDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            email: {
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

registerType(ClaimnotificationType);
module.exports = ClaimnotificationType;