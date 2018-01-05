var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var HcpcsprocedurefileuploaddetailType = new GraphQLObjectType({
    name: 'Hcpcsprocedurefileuploaddetail',
    description: '@TODO DESCRIBE ME',

    fields: function getHcpcsprocedurefileuploaddetailFields() {
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

            codeEffectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeEffectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            codeExpirationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            codeReleaseDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            codeCreationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reinstateDeleteGapBegin: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reinstateDeleteGapEnd: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            replacementCodeCrosswalk: {
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

registerType(HcpcsprocedurefileuploaddetailType);
module.exports = HcpcsprocedurefileuploaddetailType;