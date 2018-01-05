var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimresppartyType = new GraphQLObjectType({
    name: 'Claimrespparty',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimresppartyFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            respPartyNameLast: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyNameFirst: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyNameMiddle: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyAddress1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyAddress2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyCity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyPostalCode: {
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

registerType(ClaimresppartyType);
module.exports = ClaimresppartyType;