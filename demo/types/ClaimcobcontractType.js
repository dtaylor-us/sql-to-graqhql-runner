var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimcobcontractType = new GraphQLObjectType({
    name: 'Claimcobcontract',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimcobcontractFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            contractType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            amount: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            percentage: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            discountPercentage: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contractCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            versionId: {
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
            }
        };
    }
});

registerType(ClaimcobcontractType);
module.exports = ClaimcobcontractType;