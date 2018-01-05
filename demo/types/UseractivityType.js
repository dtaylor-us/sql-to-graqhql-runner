var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var UseractivityType = new GraphQLObjectType({
    name: 'Useractivity',
    description: '@TODO DESCRIBE ME',

    fields: function getUseractivityFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            loginId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            userActivityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transactionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processTime: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            hourOfDay: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dayOfWeek: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            weekOfYear: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            month: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            count: {
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

registerType(UseractivityType);
module.exports = UseractivityType;