var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ApgenerationresponseType = new GraphQLObjectType({
    name: 'Apgenerationresponse',
    description: '@TODO DESCRIBE ME',

    fields: function getApgenerationresponseFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            apTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ledgerActivityLogId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            clearinghouseClaimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            extInvoiceNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            invoiceAcctDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payAcctDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            checkVoidDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apPostbackDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            surchargeAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            interestAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            checkAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            checkSeriesId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            checkNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            checkImageId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bulkPaymentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentClaimCnt: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memoCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memoAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            noteText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            invalidInd: {
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

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ApgenerationresponseType);
module.exports = ApgenerationresponseType;