var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProviderencumbranceType = new GraphQLObjectType({
    name: 'Providerencumbrance',
    description: '@TODO DESCRIBE ME',

    fields: function getProviderencumbranceFields() {
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

            encumbranceMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            encumbranceType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            encumbranceDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            vendorId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            vendor: {
                type: getType('Vendor'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Vendor')
            },

            awardDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accountNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priority: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            encumbrancePct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            encumbranceAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            encumbranceTotal: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            satisfiedDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            shortNote: {
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
            }
        };
    }
});

registerType(ProviderencumbranceType);
module.exports = ProviderencumbranceType;