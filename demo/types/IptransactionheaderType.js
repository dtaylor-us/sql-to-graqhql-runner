var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var IptransactionheaderType = new GraphQLObjectType({
    name: 'Iptransactionheader',
    description: '@TODO DESCRIBE ME',

    fields: function getIptransactionheaderFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            apTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            penaltyState: {
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

            msaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msa: {
                type: getType('Msa'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Msa')
            },

            memberAccountId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ipTransactionStatus: {
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

            ipPaymentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentDueDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentBatchDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentBatchId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transPayableAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            checkNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            origIpTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            holdStartDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalCreditAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            scColdKey: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ediCheckSeriesDesig: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ipTransactionReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ipNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ipVoidDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ipReissueTransId: {
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

            processDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalCheckNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            originalEftTransId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalPaymentDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ipPostbackDate: {
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

            calcDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ovrPayRecovRecInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ipTransactionType: {
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

registerType(IptransactionheaderType);
module.exports = IptransactionheaderType;