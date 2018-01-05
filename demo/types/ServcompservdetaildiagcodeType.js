var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ServcompservdetaildiagcodeType = new GraphQLObjectType({
    name: 'Servcompservdetaildiagcode',
    description: '@TODO DESCRIBE ME',

    fields: function getServcompservdetaildiagcodeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            servCompServDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servCompServId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servCompVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            diagCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            diagCodeFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            diagCodeThru: {
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

registerType(ServcompservdetaildiagcodeType);
module.exports = ServcompservdetaildiagcodeType;