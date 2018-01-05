var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimaccidentType = new GraphQLObjectType({
    name: 'Claimaccident',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimaccidentFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            workInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            workDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            workDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            autoInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            autoState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            autoCountry: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            autoDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            autoDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accOtherInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            accOtherDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accOtherDate: {
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
            },

            accidentOnJobType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accidentState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimaccidentType);
module.exports = ClaimaccidentType;