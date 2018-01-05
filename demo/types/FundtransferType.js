var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FundtransferType = new GraphQLObjectType({
    name: 'Fundtransfer',
    description: '@TODO DESCRIBE ME',

    fields: function getFundtransferFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            transferEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transferExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transferFundId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fundTransmitType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fundTransferAmt: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            transPercentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fundTransferPct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fundTransmitFreq: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            weekTransDay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            monthlyTransDay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            quarterlyTransMonth: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            quarterlyTransDay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            annualTransMonth: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            annualTransDay: {
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

registerType(FundtransferType);
module.exports = FundtransferType;