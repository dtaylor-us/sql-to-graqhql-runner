var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var NdcType = new GraphQLObjectType({
    name: 'Ndc',
    description: '@TODO DESCRIBE ME',

    fields: function getNdcFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            ndcPackageDescription: {
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

            codeDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            codeDisplay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fullDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            therapeuticClassCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            productTypeName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            proprietaryName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            proprietaryNameSuffix: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nonProprietaryName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dosageFormName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            routeName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            marketingCategoryName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            applicationNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            labelerName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            substanceName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            activeNumeratorStrength: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            activeIngredUnit: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pharmClasses: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deaSchedule: {
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

registerType(NdcType);
module.exports = NdcType;