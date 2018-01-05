var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AnesthesiacompType = new GraphQLObjectType({
    name: 'Anesthesiacomp',
    description: '@TODO DESCRIBE ME',

    fields: function getAnesthesiacompFields() {
        return {
            anesthesiaCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            anesthesiaCompDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            baseType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierMatchType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ownerGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            doNotAssignInd: {
                type: GraphQLInt,
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

            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            anesthesiaCompVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            anesthesiaCompStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingExternalId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalSourceSystemType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            activationDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deactivationDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaRegionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaRegion: {
                type: getType('Region'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Region')
            },

            cmsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AnesthesiacompType);
module.exports = AnesthesiacompType;