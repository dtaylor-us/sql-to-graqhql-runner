var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimtatType = new GraphQLObjectType({
    name: 'Claimtat',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimtatFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            noOfCalendarDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            noOfWorkDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msa: {
                type: getType('Msa'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Msa')
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

            cirrusReceiptDate: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adjudicationDate: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimtatType);
module.exports = ClaimtatType;