var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ExtractftpsettingType = new GraphQLObjectType({
    name: 'Extractftpsetting',
    description: '@TODO DESCRIBE ME',

    fields: function getExtractftpsettingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            fileName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            destinationPath: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ftpHost: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ftpUser: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            port: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            secureFtp: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            controlFileInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            controlFileName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            triggerFileInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            triggerFileName: {
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

            fileTransferType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sftpUseKeyFile: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            sftpKeyFileLocation: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ExtractftpsettingType);
module.exports = ExtractftpsettingType;