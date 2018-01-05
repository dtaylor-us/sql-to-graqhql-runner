var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var LocalityType = new GraphQLObjectType({
    name: 'Locality',
    description: '@TODO DESCRIBE ME',

    fields: function getLocalityFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            localityName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            feeScheduleArea: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            localityCounties: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            gpciWork: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            gpciPractice: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            gpciMalpractice: {
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

registerType(LocalityType);
module.exports = LocalityType;