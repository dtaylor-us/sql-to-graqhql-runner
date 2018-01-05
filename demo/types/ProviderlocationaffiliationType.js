var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProviderlocationaffiliationType = new GraphQLObjectType({
    name: 'Providerlocationaffiliation',
    description: '@TODO DESCRIBE ME',

    fields: function getProviderlocationaffiliationFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            providerOrgLocationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            maleAgeLimitFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maleAgeLimitThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            femaleAgeLimitFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            femaleAgeLimitThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            unspecAgeLimitFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            unspecAgeLimitThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            effectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maximumPatientLimit: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            expirationDate: {
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

registerType(ProviderlocationaffiliationType);
module.exports = ProviderlocationaffiliationType;