var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ReferenceType = new GraphQLObjectType({
    name: 'Reference',
    description: '@TODO DESCRIBE ME',

    fields: function getReferenceFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            referenceDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            referenceDisplay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            x12Version: {
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

            startDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            endDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            overrideDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            overrideDisplay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ReferenceType);
module.exports = ReferenceType;