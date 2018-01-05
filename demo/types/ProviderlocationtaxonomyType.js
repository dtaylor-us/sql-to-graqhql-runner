var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProviderlocationtaxonomyType = new GraphQLObjectType({
    name: 'Providerlocationtaxonomy',
    description: '@TODO DESCRIBE ME',

    fields: function getProviderlocationtaxonomyFields() {
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

            providerTaxonomyId: {
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

            providerLocationAffiliationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerOrigSrcSysId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerOrigSrcSysType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerOrgLocOrigSrcSysId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerOrgLocOrigSrcSysType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ProviderlocationtaxonomyType);
module.exports = ProviderlocationtaxonomyType;