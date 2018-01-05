var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimcobinfoType = new GraphQLObjectType({
    name: 'Claimcobinfo',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimcobinfoFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            cobCoverageType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobMemberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobMember: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            cobRelationshipCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobBirthDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobGender: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobGroupName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobGroupAddress1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobGroupAddress2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobGroupCity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobGroupState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobGroupPostalCode: {
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

registerType(ClaimcobinfoType);
module.exports = ClaimcobinfoType;