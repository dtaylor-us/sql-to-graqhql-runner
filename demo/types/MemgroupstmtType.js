var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemgroupstmtType = new GraphQLObjectType({
    name: 'Memgroupstmt',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgroupstmtFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            generateInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            statementFrequency: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dayOfRun: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            statementType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            logoId1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            logoId2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            logoId3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            freqOverrideInd: {
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
            },

            sysAddressId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemgroupstmtType);
module.exports = MemgroupstmtType;