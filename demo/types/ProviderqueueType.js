var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProviderqueueType = new GraphQLObjectType({
    name: 'Providerqueue',
    description: '@TODO DESCRIBE ME',

    fields: function getProviderqueueFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            providerType: {
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

            oltpProvId: {
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

            medicareId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            socialSecurityNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            primTaxonomy: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provEntityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameLastSub: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameFirstSub: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameLast: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameFirst: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameMiddle: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameSalutation: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameSuffix: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            gender: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            birthDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deceasedDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ethnicity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            aliasLast: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            aliasFirst: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            aliasMiddle: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            aliasSuffix: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            address1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            address2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            city: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            state: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postalCode: {
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

            phone1Type: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phone1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phone1Ext: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            email: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provAltId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            altIdEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            altIdExpDate: {
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

            claimLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            providerOrgLocationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            organizationName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimProviderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimProvider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            claimProviderAddressId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityIdCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            addressEntityIdCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityTypeQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            addressOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ProviderqueueType);
module.exports = ProviderqueueType;