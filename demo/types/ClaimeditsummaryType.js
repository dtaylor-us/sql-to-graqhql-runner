var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimeditsummaryType = new GraphQLObjectType({
    name: 'Claimeditsummary',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimeditsummaryFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            editCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimReceiptDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            interestApplInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimeditsummaryType);
module.exports = ClaimeditsummaryType;