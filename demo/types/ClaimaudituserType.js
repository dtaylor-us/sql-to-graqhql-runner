var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimaudituserType = new GraphQLObjectType({
    name: 'Claimaudituser',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimaudituserFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimAuditDispositionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimAuditUserDisposition: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            userId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            editCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            auditErrorCategory: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            auditErrorCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            auditErrorSource: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            auditErrorVRcode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            invalidInd: {
                type: GraphQLInt,
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

registerType(ClaimaudituserType);
module.exports = ClaimaudituserType;