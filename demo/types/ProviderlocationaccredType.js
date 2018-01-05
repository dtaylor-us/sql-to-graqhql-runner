var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProviderlocationaccredType = new GraphQLObjectType({
    name: 'Providerlocationaccred',
    description: '@TODO DESCRIBE ME',

    fields: function getProviderlocationaccredFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            providerAccreditationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerLocationAffiliationId: {
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

            effectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expirationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerOrgOrigSrcSysId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerOrgOrigSrcSysType: {
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

registerType(ProviderlocationaccredType);
module.exports = ProviderlocationaccredType;