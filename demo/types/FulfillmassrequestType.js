var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FulfillmassrequestType = new GraphQLObjectType({
    name: 'Fulfillmassrequest',
    description: '@TODO DESCRIBE ME',

    fields: function getFulfillmassrequestFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            fulfillmentCategoryType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fulfillTemplateId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            requestDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            suppressDupeCheck: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(FulfillmassrequestType);
module.exports = FulfillmassrequestType;