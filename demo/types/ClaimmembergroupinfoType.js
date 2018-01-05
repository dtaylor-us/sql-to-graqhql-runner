var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimmembergroupinfoType = new GraphQLObjectType({
    name: 'Claimmembergroupinfo',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimmembergroupinfoFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupAddrLine1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupAddrLine2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupCity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupPostalCode: {
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

            memGroupName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupExtId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimmembergroupinfoType);
module.exports = ClaimmembergroupinfoType;