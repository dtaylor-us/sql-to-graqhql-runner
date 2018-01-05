var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimcliniceditflagType = new GraphQLObjectType({
    name: 'Claimcliniceditflag',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimcliniceditflagFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimClinicEditId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimClinicId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sequenceNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimEditFlagType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            clinicalEditResponseCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            message: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            severity: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            recommendedAction: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            targetClaimLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            recommendedModificationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recommendedModification: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recommendedAllowPct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            linkType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            linkId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            editType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            clinicalEditActionCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ignoreRecommendInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            disclosureSource: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            disclosureText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            denyReasonCode: {
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

            changeDateTime: {
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
            }
        };
    }
});

registerType(ClaimcliniceditflagType);
module.exports = ClaimcliniceditflagType;