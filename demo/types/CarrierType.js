var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var CarrierType = new GraphQLObjectType({
    name: 'Carrier',
    description: '@TODO DESCRIBE ME',

    fields: function getCarrierFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            carrierName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            businessUrl: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            natlProviderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            natlProvider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            parentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            alphaParentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            childInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            hmoInd: {
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
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adminResponsibleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            carrierBusinessId: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(CarrierType);
module.exports = CarrierType;