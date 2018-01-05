var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SysSetFlSyType = new GraphQLObjectType({
    name: 'SysSetFlSy',
    description: '@TODO DESCRIBE ME',

    fields: function getSysSetFlSyFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
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

            filePath: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cleanUpInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            retainDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cleanUpSubDirectoriesInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(SysSetFlSyType);
module.exports = SysSetFlSyType;