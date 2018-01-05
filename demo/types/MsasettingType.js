var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MsasettingType = new GraphQLObjectType({
    name: 'Msasetting',
    description: '@TODO DESCRIBE ME',

    fields: function getMsasettingFields() {
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

            effectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            autoTermEndPlanYrInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            autoTerminateInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            autoTermFromMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            autoTermFromYears: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            expirationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            breakDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bypassPendAcctInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobraEligibleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            paidIncurredType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defFilingLimitType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            disabilAgeLimWaiver: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            disregardTplInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            enableBalTransferInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            enableSpendDownInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            useFutureBalInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            filingLimitDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            filingLimitDuration: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxBreak: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            remarkCodeScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nonFundSuspInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            offsetDollarType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            offsetPlanYearType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            openEndPlanYrInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pendMaxPeriodDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pendMaxPeriodType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pendUntilFundedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            recovEmployInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            reinstateDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            reinstateInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            studentAgeThruYears: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            reqCalYearInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            studentAgeThruMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            spendDownDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            spendDownMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            spendDownType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            studentAgeThruLcd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            termFilingDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            termFilingDur: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            studAgeLimitRule: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            gracePeriodThruDay: {
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

            gracePeriodThruMonth: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxBreakFundPct: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            enableSurvivorTrans: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            enableBalExchangeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            gracePeriodThruLcd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            autoTermFromLcd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            denyRmoClaimInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            reinstateDuration: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recoveryDuration: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobraSplitRule: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobraSplitPartial: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobraSplitSingle: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eftThreshold: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            checkThreshold: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fundHoldDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            releaseFromMonth: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            releaseFromDay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defFilLimTypeNonP: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            filLimDtNonP: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            filLimDurationNonP: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            defFilingLimit: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            termFilingDtNonP: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            termFilingDurNonP: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            defTermFilingLimit: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reimburseToSubsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            suppressContrib: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            payeeMemberInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            payeeProviderInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            payrollFreqRequired: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            autoEnrollEmplStatusInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            termRollOffMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            recovCurrPlnYrOnly: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            autoTermEmplStatusInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            enableCarOvrForfInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adjudScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            releaseFromLcd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MsasettingType);
module.exports = MsasettingType;