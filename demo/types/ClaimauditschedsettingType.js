var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimauditschedsettingType = new GraphQLObjectType({
    name: 'Claimauditschedsetting',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimauditschedsettingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimAuditSchedVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            userActionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            auditEncounterInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            nonAuthAuditInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            auditForeignClaimInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            auditCob: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prePayPct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            auditAdjustmentsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            prePayBilledThreshold: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prePayAllowedThreshold: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prePayPayableThreshold: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postPayPct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postPayBilledThreshold: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postPayAllowedThreshold: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postPayPayableThreshold: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            auditTheAuditorPrePayPct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            auditTheAuditorPostPayPct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            effectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expirationDate: {
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

            auditSampleType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postApPct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postApBilledThreshold: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postApAllowedThreshold: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postApPayableThreshold: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimauditschedsettingType);
module.exports = ClaimauditschedsettingType;