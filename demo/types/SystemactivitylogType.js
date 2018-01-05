var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SystemactivitylogType = new GraphQLObjectType({
    name: 'Systemactivitylog',
    description: '@TODO DESCRIBE ME',

    fields: function getSystemactivitylogFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            className: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            methodName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serverName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            activityTimeMsNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            userId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            userActivityLogId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(SystemactivitylogType);
module.exports = SystemactivitylogType;