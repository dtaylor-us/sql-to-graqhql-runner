var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SysSqlLogType = new GraphQLObjectType({
    name: 'SysSqlLog',
    description: '@TODO DESCRIBE ME',

    fields: function getSysSqlLogFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            sqlText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sqlWithValues: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            userActivityLogId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            userId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            activityTimeMsNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            serverName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(SysSqlLogType);
module.exports = SysSqlLogType;