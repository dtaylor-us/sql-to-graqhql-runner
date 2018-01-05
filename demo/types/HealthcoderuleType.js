var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var HealthcoderuleType = new GraphQLObjectType({
    name: 'Healthcoderule',
    description: '@TODO DESCRIBE ME',

    fields: function getHealthcoderuleFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            msaVersionId: {
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

            benefitCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            healthCodeSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            effDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ageFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageFromDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ageThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageThruDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            genderLimit: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benCodeCoverage: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            autoAdjudicate: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxUnitReimbAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxMonthlyReimbAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxAnnualReimbAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxOccurrenceQty: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxOccurDuration: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxOccurDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            purposeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dedSatisfactionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            employStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrierCoinsPct: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allowAssignmentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            fundYearBalanceType: {
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

            allowFutureDosInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            futureDosType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            futureDosDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            futureDosMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            reqStartDos: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            creditHealthPlan: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parNetworkTier: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(HealthcoderuleType);
module.exports = HealthcoderuleType;