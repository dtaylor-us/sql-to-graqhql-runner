var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimauditdispositionType = new GraphQLObjectType({
    name: 'Claimauditdisposition',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimauditdispositionFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimQualityAuditId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimAuditDisposition: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            auditDispositionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            auditDispositionDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            auditDispositionStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            auditAssignRouting: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            auditAssignUser: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            auditorUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            startDateTime: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            endDateTime: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimauditdispositionType);
module.exports = ClaimauditdispositionType;