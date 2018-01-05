var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClinicaleffratgbaseuploadstageType = new GraphQLObjectType({
    name: 'Clinicaleffratgbaseuploadstage',
    description: '@TODO DESCRIBE ME',

    fields: function getClinicaleffratgbaseuploadstageFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            clcEffRatgBaseFileUpldHeaderId: {
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

            mpinId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            piqStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            locAddress1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            locAddress2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            locCity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            locState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            locZip: {
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

            clinicalEfficiencyFileType: {
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

            officeLocationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tinNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClinicaleffratgbaseuploadstageType);
module.exports = ClinicaleffratgbaseuploadstageType;