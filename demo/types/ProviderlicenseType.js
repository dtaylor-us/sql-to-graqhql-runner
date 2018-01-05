var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProviderlicenseType = new GraphQLObjectType({
    name: 'Providerlicense',
    description: '@TODO DESCRIBE ME',

    fields: function getProviderlicenseFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
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

            licensingAgency: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            licenseId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            licenseType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            licenseStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            state: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            country: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            effectiveDate: {
                type: GraphQLString,
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
            },

            licenseBoardNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            licenseBoardDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            issueDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            licenseExpirationReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ProviderlicenseType);
module.exports = ProviderlicenseType;