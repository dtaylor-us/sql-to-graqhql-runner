var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProviderapplicationType = new GraphQLObjectType({
    name: 'Providerapplication',
    description: '@TODO DESCRIBE ME',

    fields: function getProviderapplicationFields() {
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

            applicationStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            appSentDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transmissionMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            appReceivedDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            birthCity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            birthState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            birthCountry: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            citizenshipStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            visaNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            militaryServiceCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            activeMilitaryRsv: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            foreignGrad: {
                type: GraphQLInt,
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

registerType(ProviderapplicationType);
module.exports = ProviderapplicationType;