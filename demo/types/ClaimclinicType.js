var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimclinicType = new GraphQLObjectType({
    name: 'Claimclinic',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimclinicFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            noEvalReqInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            clinicalEditBypassReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            evaluationCleanInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            evaluationCompleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimEventId: {
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
            },

            sentForReviewDate: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            receivedResultsDate: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            clinicalEditSchedDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mgAdjudScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimclinicType);
module.exports = ClaimclinicType;