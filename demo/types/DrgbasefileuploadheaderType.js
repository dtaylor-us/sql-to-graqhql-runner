var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var DrgbasefileuploadheaderType = new GraphQLObjectType({
    name: 'Drgbasefileuploadheader',
    description: '@TODO DESCRIBE ME',

    fields: function getDrgbasefileuploadheaderFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            fileName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            newCodeEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            newCodeExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            jobSubmissionDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            jobSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            recordsTotal: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recordsProcessed: {
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

registerType(DrgbasefileuploadheaderType);
module.exports = DrgbasefileuploadheaderType;