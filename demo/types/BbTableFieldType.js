var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BbTableFieldType = new GraphQLObjectType({
    name: 'BbTableField',
    description: '@TODO DESCRIBE ME',

    fields: function getBbTableFieldFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            sortNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            primaryKey: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            incrementedKey: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            hiloBlockSize: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            seqName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            required: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            phi: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            fkeyTable: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fkeyField: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            encrypt: {
                type: GraphQLInt,
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

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
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

registerType(BbTableFieldType);
module.exports = BbTableFieldType;