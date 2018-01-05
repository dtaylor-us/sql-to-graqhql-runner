var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var Memgroup834ExtractType = new GraphQLObjectType({
    name: 'Memgroup834Extract',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgroup834ExtractFields() {
        return {
            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(Memgroup834ExtractType);
module.exports = Memgroup834ExtractType;