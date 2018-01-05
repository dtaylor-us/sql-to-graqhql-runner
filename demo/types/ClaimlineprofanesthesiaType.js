var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimlineprofanesthesiaType = new GraphQLObjectType({
    name: 'Claimlineprofanesthesia',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimlineprofanesthesiaFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            serviceLineMinutes: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            serviceStartTime: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceEndTime: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            addlObstetricUnits: {
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

registerType(ClaimlineprofanesthesiaType);
module.exports = ClaimlineprofanesthesiaType;