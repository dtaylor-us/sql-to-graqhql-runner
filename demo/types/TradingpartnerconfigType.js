var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var TradingpartnerconfigType = new GraphQLObjectType({
    name: 'Tradingpartnerconfig',
    description: '@TODO DESCRIBE ME',

    fields: function getTradingpartnerconfigFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            tradingPartnerName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tradingPartnerType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tradingPartnerTxType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            exchangeMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            slaType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            slaCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            extSystId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            extRouteCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            extSysType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            effectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expirationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            aggregatorId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            batchTxInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            batchType: {
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

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
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

registerType(TradingpartnerconfigType);
module.exports = TradingpartnerconfigType;