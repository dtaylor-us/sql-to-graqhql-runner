var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimauditschedType = new GraphQLObjectType({
    name: 'Claimauditsched',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimauditschedFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimAuditSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimAuditSchedVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            versionStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            scheduleDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            assignedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            placeOfServiceSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billTypeSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            diagnosisSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provSpecialtySetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            revenueSetId: {
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

registerType(ClaimauditschedType);
module.exports = ClaimauditschedType;