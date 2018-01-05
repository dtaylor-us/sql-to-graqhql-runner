var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AptransactionType = new GraphQLObjectType({
    name: 'Aptransaction',
    description: '@TODO DESCRIBE ME',

    fields: function getAptransactionFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerEntityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerRoutingNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerEntityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerAccountNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerEntityName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeEntityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerBankId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerBank: {
                type: getType('Bank'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Bank')
            },

            payeeEntityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeEntityName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeAddressLine1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeAddressLine2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeCity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeCountry: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeePostalCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeRoutingNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeAccountNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apPaymentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentDueDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transPayableAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            origApTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            holdStartDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apVoidDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apReissueTransId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sentToCheckProcDate: {
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

            arTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deleteArTransId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parentApTransId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            capitationRunId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeAddressLine3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeAddressLine4: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeAddressLine5: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeCountrySubdivision: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeBankId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeBank: {
                type: getType('Bank'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Bank')
            },

            paymentRequestAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalInterestAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            overpaymentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            overpaymentRecoveredAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalReductionAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalSurchargeAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalDetailAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimEventId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberBenefitId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeEntityIdQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nonPaymentTransInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memberNotifInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            providerNotifInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            manualInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            payeeTin: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberAccountId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            remarkCodeSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            preliminaryTotalInterestAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            clearinghouseClaimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AptransactionType);
module.exports = AptransactionType;