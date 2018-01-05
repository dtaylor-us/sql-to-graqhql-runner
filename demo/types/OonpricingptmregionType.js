var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var OonpricingptmregionType = new GraphQLObjectType({
    name: 'Oonpricingptmregion',
    description: '@TODO DESCRIBE ME',

    fields: function getOonpricingptmregionFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            oonPricingPtmDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonPricingPtmCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaRegionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaRegion: {
                type: getType('Region'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Region')
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

registerType(OonpricingptmregionType);
module.exports = OonpricingptmregionType;