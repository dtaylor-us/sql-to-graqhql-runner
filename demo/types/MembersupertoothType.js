var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MembersupertoothType = new GraphQLObjectType({
    name: 'Membersupertooth',
    description: '@TODO DESCRIBE ME',

    fields: function getMembersupertoothFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            member: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            supernumeraryToothId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            supernumeraryTooth: {
                type: getType('Tooth'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Tooth')
            },

            toothType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            toothRegion: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            toothArch: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dentalQuadrant: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            surfaceO: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surfaceM: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surfaceLa: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surfaceL: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surfaceI: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surfaceF: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surfaceD: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surfaceB: {
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

registerType(MembersupertoothType);
module.exports = MembersupertoothType;