var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var Claiminst81CcType = new GraphQLObjectType({
    name: 'Claiminst81Cc',
    description: '@TODO DESCRIBE ME',

    fields: function getClaiminst81CcFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            ccQualifierA: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ccCodeA: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ccValueA: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ccQualifierB: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ccCodeB: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ccValueB: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ccQualifierC: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ccCodeC: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ccValueC: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ccQualifierD: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ccCodeD: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ccValueD: {
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

registerType(Claiminst81CcType);
module.exports = Claiminst81CcType;