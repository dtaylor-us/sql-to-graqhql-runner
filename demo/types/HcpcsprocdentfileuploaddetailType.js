var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var HcpcsprocdentfileuploaddetailType = new GraphQLObjectType({
    name: 'Hcpcsprocdentfileuploaddetail',
    description: '@TODO DESCRIBE ME',

    fields: function getHcpcsprocdentfileuploaddetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            hcpcsProcedureFileUploadHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            hcpcsCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            statusIndicator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            shortDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            longDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fullDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            hcpcsDentalCategory: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            hcpcsDentalClass: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            hcpcsMedCovgGuidelines: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            hcpcsOralHealthAssmt: {
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

registerType(HcpcsprocdentfileuploaddetailType);
module.exports = HcpcsprocdentfileuploaddetailType;