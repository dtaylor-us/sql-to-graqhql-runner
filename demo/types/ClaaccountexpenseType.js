var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaaccountexpenseType = new GraphQLObjectType({
    name: 'Claaccountexpense',
    description: '@TODO DESCRIBE ME',

    fields: function getClaaccountexpenseFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            expenseCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expenseCodeSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deniedMrTotal: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coveredMrTotal: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrierCoinsPct: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memCoinsOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            coinsReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postCoinsMr: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorPymtReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postPriorPymtMr: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postMaxReductMr: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            availBalReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postAvailBalMr: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recoupReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postRecoupBalMr: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dateOfService: {
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

            accessPointReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postAccessPointMr: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pledgeReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postPledgeMr: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaaccountexpenseType);
module.exports = ClaaccountexpenseType;