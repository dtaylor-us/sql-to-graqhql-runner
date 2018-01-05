var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var UcrbasefileuploadstagingType = new GraphQLObjectType({
    name: 'Ucrbasefileuploadstaging',
    description: '@TODO DESCRIBE ME',

    fields: function getUcrbasefileuploadstagingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            ucrBaseFileUploadHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            geoZip: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            procCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            systemTypeValue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            percentile50: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            percentile60: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            percentile70: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            percentile75: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            percentile80: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            percentile85: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            percentile90: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            percentile95: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            errorRecInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            recUploadFailedInd: {
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

            ucrFileType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(UcrbasefileuploadstagingType);
module.exports = UcrbasefileuploadstagingType;