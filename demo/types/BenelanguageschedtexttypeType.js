var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BenelanguageschedtexttypeType = new GraphQLObjectType({
    name: 'Benelanguageschedtexttype',
    description: '@TODO DESCRIBE ME',

    fields: function getBenelanguageschedtexttypeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(BenelanguageschedtexttypeType);
module.exports = BenelanguageschedtexttypeType;