var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FulfillmassvariablecontentType = new GraphQLObjectType({
    name: 'Fulfillmassvariablecontent',
    description: '@TODO DESCRIBE ME',

    fields: function getFulfillmassvariablecontentFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            fulfillMassRequestId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            variableContentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(FulfillmassvariablecontentType);
module.exports = FulfillmassvariablecontentType;