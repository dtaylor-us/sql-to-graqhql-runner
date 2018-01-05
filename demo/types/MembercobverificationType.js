var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MembercobverificationType = new GraphQLObjectType({
    name: 'Membercobverification',
    description: '@TODO DESCRIBE ME',

    fields: function getMembercobverificationFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memberCobid: {
                type: GraphQLString,
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

            verificationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            verificationSource: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            verificationComments: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            verificationUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            verificationOutcomeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            verificationOutcomeReasonType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tieBreakerRuleUsed: {
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

registerType(MembercobverificationType);
module.exports = MembercobverificationType;