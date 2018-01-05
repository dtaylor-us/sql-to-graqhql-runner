var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var NdcpackagefileuploadstagingType = new GraphQLObjectType({
    name: 'Ndcpackagefileuploadstaging',
    description: '@TODO DESCRIBE ME',

    fields: function getNdcpackagefileuploadstagingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            ndcPrdPckBaseFileUploadHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ndcPrdPckProductId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ndcPrdPckProduct: {
                type: getType('Product'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Product')
            },

            productNdc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ndcPackageCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            packageDescription: {
                type: GraphQLString,
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
            }
        };
    }
});

registerType(NdcpackagefileuploadstagingType);
module.exports = NdcpackagefileuploadstagingType;