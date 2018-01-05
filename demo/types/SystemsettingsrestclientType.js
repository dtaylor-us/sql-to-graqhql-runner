var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SystemsettingsrestclientType = new GraphQLObjectType({
    name: 'Systemsettingsrestclient',
    description: '@TODO DESCRIBE ME',

    fields: function getSystemsettingsrestclientFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            restClientBaseUrl: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            securityUrl: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            securityClientId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            securitySecret: {
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

registerType(SystemsettingsrestclientType);
module.exports = SystemsettingsrestclientType;