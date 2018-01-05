var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var PricingsetType = new GraphQLObjectType({
    name: 'Pricingset',
    description: '@TODO DESCRIBE ME',

    fields: function getPricingsetFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            pricingSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingSetVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pricingSetStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingSetDesc: {
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
            },

            doNotAssignInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            activationDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deactivationDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(PricingsetType);
module.exports = PricingsetType;