var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FulfillrequestidentifierType = new GraphQLObjectType({
    name: 'Fulfillrequestidentifier',
    description: '@TODO DESCRIBE ME',

    fields: function getFulfillrequestidentifierFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            fulfillRequestId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fulfillContentCategory: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            requestIdentifierName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            requestIdentifierValue: {
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

registerType(FulfillrequestidentifierType);
module.exports = FulfillrequestidentifierType;