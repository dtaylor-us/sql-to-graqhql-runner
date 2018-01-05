var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var UsertableType = new GraphQLObjectType({
    name: 'Usertable',
    description: '@TODO DESCRIBE ME',

    fields: function getUsertableFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            lastName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            firstName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            loginStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lastLoginDate: {
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

            emailAddress: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            screenResolutionHeightNumber: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            screenResolutionWidthNumber: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            reportsAllowed: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(UsertableType);
module.exports = UsertableType;