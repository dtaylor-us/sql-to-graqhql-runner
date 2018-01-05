var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MsahealthcareType = new GraphQLObjectType({
    name: 'Msahealthcare',
    description: '@TODO DESCRIBE ME',

    fields: function getMsahealthcareFields() {
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

            scmId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            scm: {
                type: getType('Scm'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Scm')
            },

            dualHealthCovInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            priceNonParInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ucrPercentile: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defAssignType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lockAssignmentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            msaAdjudRule: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrierCoinsPct: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            fundYearBalanceType: {
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
            }
        };
    }
});

registerType(MsahealthcareType);
module.exports = MsahealthcareType;