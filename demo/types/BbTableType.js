var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BbTableType = new GraphQLObjectType({
    name: 'BbTable',
    description: '@TODO DESCRIBE ME',

    fields: function getBbTableFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            descriptionText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            voclass: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            daoclass: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            daoclassimpl: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            auditnotestable: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            viewIndicator: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            virtualIndicator: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            underConstruction: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            secured: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            logHistory: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            numPkIndexPartitions: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dbOnly: {
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
            },

            fKeyAlias: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(BbTableType);
module.exports = BbTableType;