var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var RevenuebasefileuploaddetailType = new GraphQLObjectType({
    name: 'Revenuebasefileuploaddetail',
    description: '@TODO DESCRIBE ME',

    fields: function getRevenuebasefileuploaddetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            revenueBaseFileUploadHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            revenueCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            revenueSubCatDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            revenueCodeDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            shortDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            effectiveDateStr: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expirationDateStr: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeDateStr: {
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

registerType(RevenuebasefileuploaddetailType);
module.exports = RevenuebasefileuploaddetailType;