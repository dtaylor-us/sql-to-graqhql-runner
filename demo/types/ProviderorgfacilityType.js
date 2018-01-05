var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProviderorgfacilityType = new GraphQLObjectType({
    name: 'Providerorgfacility',
    description: '@TODO DESCRIBE ME',

    fields: function getProviderorgfacilityFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            providerOrgLocationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerOrgId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            facilityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            numberBeds: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            erInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            traumaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            tertiaryCareInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pediatricInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            obInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            countyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            specialServices1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            specialServices2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            specialServices3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            specialServices4: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            specialServices5: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fqhcInd: {
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

registerType(ProviderorgfacilityType);
module.exports = ProviderorgfacilityType;