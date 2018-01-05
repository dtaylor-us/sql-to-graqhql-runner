var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MsacontribtypedefType = new GraphQLObjectType({
    name: 'Msacontribtypedef',
    description: '@TODO DESCRIBE ME',

    fields: function getMsacontribtypedefFields() {
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

            arTransactionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            timelineInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            autoContribInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            contribMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contribMonth1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contribDay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contribMonth2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contribMonth3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contribMonth4: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ageInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            yearsFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            yearsThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            timeframeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            timeframeEvent: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            enrollDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            employStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            employDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            interestDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            roundingRule: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pledgeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prefundPledgePct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prefundSalaryPct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prefundRepayOption: {
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

            relCredResLifeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            relCreditMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            altDescSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            autoCalcMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calcContribDateInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            calcContribDateType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupPledgeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            calcOnAvgDailyBal: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            minPledgeContrib: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            autoPledgeConRecalc: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deleteInRebuildInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            moveInRebuildInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MsacontribtypedefType);
module.exports = MsacontribtypedefType;