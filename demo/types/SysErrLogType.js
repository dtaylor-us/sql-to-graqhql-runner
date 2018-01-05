var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SysErrLogType = new GraphQLObjectType({
    name: 'SysErrLog',
    description: '@TODO DESCRIBE ME',

    fields: function getSysErrLogFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
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

            errorShortDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            errorLongDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serverName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(SysErrLogType);
module.exports = SysErrLogType;