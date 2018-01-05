var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemberholdType = new GraphQLObjectType({
    name: 'Memberhold',
    description: '@TODO DESCRIBE ME',

    fields: function getMemberholdFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            member: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            holdCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            holdEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            holdExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            shortNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            holdPremiumInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdClaimPayInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdClaimAdjudicationInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdCapitationInd: {
                type: GraphQLInt,
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

            holdElig: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdContrib: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdConfStmtsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdManlContrib: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdCac: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemberholdType);
module.exports = MemberholdType;