var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SysKeyType = new GraphQLObjectType({
    name: 'SysKey',
    description: '@TODO DESCRIBE ME',

    fields: function getSysKeyFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            systemSeqNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            blockSize: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(SysKeyType);
module.exports = SysKeyType;