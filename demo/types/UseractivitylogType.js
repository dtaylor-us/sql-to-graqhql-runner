var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var UseractivitylogType = new GraphQLObjectType({
    name: 'Useractivitylog',
    description: '@TODO DESCRIBE ME',

    fields: function getUseractivitylogFields() {
        return {
            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            userId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            permissionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            permission: {
                type: getType('Permission'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Permission')
            },

            keyTable: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serializedObject: {
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
            },

            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            requestData: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serverIpText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            userIpText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            activityTargetText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            irmEventCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(UseractivitylogType);
module.exports = UseractivitylogType;