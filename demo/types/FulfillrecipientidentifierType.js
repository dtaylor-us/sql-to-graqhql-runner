var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FulfillrecipientidentifierType = new GraphQLObjectType({
    name: 'Fulfillrecipientidentifier',
    description: '@TODO DESCRIBE ME',

    fields: function getFulfillrecipientidentifierFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            fulfillRequestId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fulfillRecipientType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recipientIdentifierName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recipientIdentifierValue: {
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

registerType(FulfillrecipientidentifierType);
module.exports = FulfillrecipientidentifierType;