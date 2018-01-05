var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FulfillmentclientType = new GraphQLObjectType({
    name: 'Fulfillmentclient',
    description: '@TODO DESCRIBE ME',

    fields: function getFulfillmentclientFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            clientId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            appName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            appDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalInd: {
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
            }
        };
    }
});

registerType(FulfillmentclientType);
module.exports = FulfillmentclientType;