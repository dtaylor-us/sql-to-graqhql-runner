var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimlineprofdmeType = new GraphQLObjectType({
    name: 'Claimlineprofdme',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimlineprofdmeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            procedureCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            unitOfMeasurement: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            quantity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rentalPrice: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            purchasePrice: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            frequencyCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dmeCertType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dmeDurationQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dmeDuration: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dmeCertRevisionDate: {
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

registerType(ClaimlineprofdmeType);
module.exports = ClaimlineprofdmeType;