var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ApcbasefileuploaddetailType = new GraphQLObjectType({
    name: 'Apcbasefileuploaddetail',
    description: '@TODO DESCRIBE ME',

    fields: function getApcbasefileuploaddetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            apcBaseFileUploadHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            codeDisplay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apcNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apcTitle: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apcStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            relativeWeightStr: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apcPaymentStr: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apcUnadjCopayStr: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            minUnadjCopayStr: {
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

registerType(ApcbasefileuploaddetailType);
module.exports = ApcbasefileuploaddetailType;