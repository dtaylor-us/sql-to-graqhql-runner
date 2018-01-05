var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProvidercontactaddressType = new GraphQLObjectType({
    name: 'Providercontactaddress',
    description: '@TODO DESCRIBE ME',

    fields: function getProvidercontactaddressFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            providerContactId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            addressType: {
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

            address3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            address4: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            address5: {
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

registerType(ProvidercontactaddressType);
module.exports = ProvidercontactaddressType;