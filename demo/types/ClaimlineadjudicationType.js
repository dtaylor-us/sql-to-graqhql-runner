var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimlineadjudicationType = new GraphQLObjectType({
    name: 'Claimlineadjudication',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimlineadjudicationFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
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

            benefitClaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recoupOpInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            payableAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            assignmentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimSubscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cancelDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mgAdjudScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            productAdjudScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subsAffiliationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adjudicationDate: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            predeterminationNoPayInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            payTheMemberInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            generateProviderPraInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            generateMemberEobInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimEventId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            splitContinuationClaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            splitRatio: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postReductionSplitInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            finalNetPayAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finalMemRespAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finalProvRespAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lineOfBusinessId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            productVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrierId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrier: {
                type: getType('Carrier'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Carrier')
            },

            primaryCoverageInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            firstCirrusBasePlanInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            externalCarrierPaymentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            externalCarrierProviderParStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberCobid: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claSplitType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coverageSeqCode: {
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

registerType(ClaimlineadjudicationType);
module.exports = ClaimlineadjudicationType;