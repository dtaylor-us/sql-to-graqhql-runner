var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClabenefitauthreferralmatchType = new GraphQLObjectType({
    name: 'Clabenefitauthreferralmatch',
    description: '@TODO DESCRIBE ME',

    fields: function getClabenefitauthreferralmatchFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimLineAdjudicationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            umAuthId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClabenefitauthreferralmatchType);
module.exports = ClabenefitauthreferralmatchType;