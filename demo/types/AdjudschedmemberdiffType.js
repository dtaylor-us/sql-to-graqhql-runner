var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AdjudschedmemberdiffType = new GraphQLObjectType({
    name: 'Adjudschedmemberdiff',
    description: '@TODO DESCRIBE ME',

    fields: function getAdjudschedmemberdiffFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            difSubNameLast: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difSubNameFirst: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difSubNameMiddle: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difSubBirthDate: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difSubGender: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difSubMaritalStatus: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difSubAddressLine1: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difSubCity: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difSubState: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difSubPostalCode: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difMemNameLast: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difMemNameFirst: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difMemNameMiddle: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difGender: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difBirthDate: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difMaritalStatus: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difMemAddressLine1: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difMemCity: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difMemState: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            difMemPostalCode: {
                type: GraphQLInt,
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

registerType(AdjudschedmemberdiffType);
module.exports = AdjudschedmemberdiffType;