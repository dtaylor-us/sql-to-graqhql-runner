var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ApidefaultpricingcomporderType = new GraphQLObjectType({
    name: 'Apidefaultpricingcomporder',
    description: '@TODO DESCRIBE ME',

    fields: function getApidefaultpricingcomporderFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            pricingSettingId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalSourceSystemType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ipProcessOrderNumber: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oppProcessOrderNumber: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pfsProcessOrderNumber: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            anesthProcessOrderNumber: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ambProcessOrderNumber: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ApidefaultpricingcomporderType);
module.exports = ApidefaultpricingcomporderType;