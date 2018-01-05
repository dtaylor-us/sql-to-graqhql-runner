var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimeditType = new GraphQLObjectType({
    name: 'Claimedit',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimeditFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimQualityAuditId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            queueId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            editCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            fieldName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fieldNameId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fromClaimEditId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            requestStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            resolutionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            resolutionCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberBenefitId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tierNumber: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            codeLevel: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            version: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memberAccountId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            editMsaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            editMsa: {
                type: getType('Msa'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Msa')
            },

            graceInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            interestApplInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            editDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            editLockUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            editLockDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processTime: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            routeMessage: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            routeReturn: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            routeRespMessage: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adjudScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimSubscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerTin: {
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

            originalReceiptDate: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            uncleanEditInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            fulfillTemplateId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            variableContentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            denyReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineAdjudicationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            umAuthId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            umAuthServiceId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalResolutionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimeditType);
module.exports = ClaimeditType;