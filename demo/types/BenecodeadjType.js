var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BenecodeadjType = new GraphQLObjectType({
    name: 'Benecodeadj',
    description: '@TODO DESCRIBE ME',

    fields: function getBenecodeadjFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            carrierCoinsPct: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            copayment: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            copaymentDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxCopayments: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxCopaymentsQty: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxCopaymentsDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxOccurrences: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxOccurrencesQty: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxOccurrencesDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxConsecDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            consecDaysFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            consecDaysThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            primaryBeneDeductibleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dollarFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dollarThru: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dollarType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dollarRangeQty: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dollarDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxDollarAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxDollarAmtQty: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxDollarAmtDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxDollarAmtType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            occurrenceFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            occurrenceThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            occurRangeQty: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            occurrenceDt: {
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

            copayOrder: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxOverflowInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            primaryDeductibleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            idCardCopayInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxCostShareAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxCostShareDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            readmitTermQty: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            readmitTermDuration: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            readmitWaiverInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(BenecodeadjType);
module.exports = BenecodeadjType;