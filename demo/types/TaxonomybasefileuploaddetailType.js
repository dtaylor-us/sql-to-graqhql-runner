var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var TaxonomybasefileuploaddetailType = new GraphQLObjectType({
    name: 'Taxonomybasefileuploaddetail',
    description: '@TODO DESCRIBE ME',

    fields: function getTaxonomybasefileuploaddetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            taxonomyBaseFileUploadHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            taxonomyCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            classification: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            specialization: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            taxonomyDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            notes: {
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

registerType(TaxonomybasefileuploaddetailType);
module.exports = TaxonomybasefileuploaddetailType;