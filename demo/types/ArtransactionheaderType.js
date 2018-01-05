var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ArtransactionheaderType = new GraphQLObjectType({
    name: 'Artransactionheader',
    description: '@TODO DESCRIBE ME',

    fields: function getArtransactionheaderFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            arTransStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            arTransactionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msa: {
                type: getType('Msa'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Msa')
            },

            contribEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerEntityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerEntityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            arPaymentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            checkNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            checkDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dcnId: {
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

            transactionAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            incentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            incent: {
                type: getType('Incent'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Incent')
            },

            arCreditStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reopenClaimInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            collectedAdjustAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            arNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            arTransactionReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            receiptDate: {
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

            overflowArTransId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalArTransId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            depMemberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            depMember: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            pctOfBalRate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            depRelationshipCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cancelArTransId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            balAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            scColdKey: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postBackDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sentToCheckProcDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transactionSource: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberAccountId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            suppressFeedType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prefundAdjustmentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apPostbackDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            autoPledgeContribInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            carrierCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            linkToId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            linkFrmId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mfToCheckProcDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ehpFullfillId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subsAffiliationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ArtransactionheaderType);
module.exports = ArtransactionheaderType;