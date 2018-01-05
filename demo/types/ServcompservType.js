var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ServcompservType = new GraphQLObjectType({
    name: 'Servcompserv',
    description: '@TODO DESCRIBE ME',

    fields: function getServcompservFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            servCompVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servId: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            servName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servDescription: {
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

            benefitCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            professionalInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            institutionalInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dentalInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pharmacyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ServcompservType);
module.exports = ServcompservType;