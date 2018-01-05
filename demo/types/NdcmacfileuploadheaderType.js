var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var NdcmacfileuploadheaderType = new GraphQLObjectType({
    name: 'Ndcmacfileuploadheader',
    description: '@TODO DESCRIBE ME',

    fields: function getNdcmacfileuploadheaderFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            fileName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fileUploadStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fileEffectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fileExpirationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recordCount: {
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

            activeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(NdcmacfileuploadheaderType);
module.exports = NdcmacfileuploadheaderType;