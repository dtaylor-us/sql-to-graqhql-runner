var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimlineexpenseType = new GraphQLObjectType({
    name: 'Claimlineexpense',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimlineexpenseFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            dateOfServiceFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dateOfServiceThru: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceUnits: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expenseAmount: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expenseCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            svcLineStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transferLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimLineCancelReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            descriptionText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalPaidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalBenefitPaidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalAccountPaidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalCobPaidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalNonrecoupMrAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalMemRespAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fundHoldAmount: {
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

            noFamMemberInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            noDescriptionInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            incompleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            noReceiptInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            bypassCarryoverInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxInfoReqInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            bypassGraceDollars: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            amtRequestInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            balStmtOnlyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            benDeterminInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dcInfoReqInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            discountAmtInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dosReqtInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            eobReqtInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            estDownPymntInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            foreignRxInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            proofPymtInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            insClmFormInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            noFinRespInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            otcInfoReqInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            outdatedLmnInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ptRespUndetInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            substantiationInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cancelLineInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            totalProvRespAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalExternalCarrierPaidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalExternalCarrierMemRespAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalExternalCarrierProvRespAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalLineNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimlineexpenseType);
module.exports = ClaimlineexpenseType;