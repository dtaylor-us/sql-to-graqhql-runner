var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProviderType = new GraphQLObjectType({
    name: 'Provider',
    description: '@TODO DESCRIBE ME',

    fields: function getProviderFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            providerType: {
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

            nameFirstSub: {
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

            ethnicity: {
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

            expirationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            organizationName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalSourceSystemType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalSourceSystemId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameSuffixTitle: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expirationReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            epsdtInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            epsdtProgram: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalChangeDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ProviderType);
module.exports = ProviderType;