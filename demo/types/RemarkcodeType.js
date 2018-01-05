var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var RemarkcodeType = new GraphQLObjectType({
    name: 'Remarkcode',
    description: '@TODO DESCRIBE ME',

    fields: function getRemarkcodeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            referenceDisplay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recipientType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            useSameTextForMemProvInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            suppressEobInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            suppressPraInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memProvRemarkText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memRemarkText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            suppressPortalInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            provRemarkText: {
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

registerType(RemarkcodeType);
module.exports = RemarkcodeType;