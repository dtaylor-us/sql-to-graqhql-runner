var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var PricingsettingmprType = new GraphQLObjectType({
    name: 'Pricingsettingmpr',
    description: '@TODO DESCRIBE ME',

    fields: function getPricingsettingmprFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            systemDefaultInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            state: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mprCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingSettingId: {
                type: GraphQLString,
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
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(PricingsettingmprType);
module.exports = PricingsettingmprType;