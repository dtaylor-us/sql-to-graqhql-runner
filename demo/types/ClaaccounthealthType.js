var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaaccounthealthType = new GraphQLObjectType({
    name: 'Claaccounthealth',
    description: '@TODO DESCRIBE ME',

    fields: function getClaaccounthealthFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            benefitCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            healthCodeSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            benefitPoints: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deniedMrTotal: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coveredMrDed: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coveredMrCopay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coveredMrCoins: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coveredMrOther: {
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

registerType(ClaaccounthealthType);
module.exports = ClaaccounthealthType;