var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AdjudschedsettingsaccountType = new GraphQLObjectType({
    name: 'Adjudschedsettingsaccount',
    description: '@TODO DESCRIBE ME',

    fields: function getAdjudschedsettingsaccountFields() {
        return {
            pendUntilFundedDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pendUntilFundMaxdDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subsDefinedCoinsDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            noBenCodeAssignedDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accessPointDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pledgeReductDrc: {
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

            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            nonCovRemarkDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recoupDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            healthRulesCarrierCoinsDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dualHealthCovDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expenseRulesCarrierCoinsDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            availableBalanceReductionDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            curBalOnlyExceededDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            currentBalAndCarryoverExceededDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carryoverOnlyExceededDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            perMemberPlanYearMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorBalOnlyExceededDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            currentBalExceededDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            perClaimLimitDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lifetimeIndividualDollarMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lifetimeIndividualOccurrenceMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lifetimeFamilyDollarMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lifetimeFamilyOccurrenceMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planYearIndividualDollarMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planYearIndividualOccurrenceMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planYearFamilyDollarMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planYearFamilyOccurrenceMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calendarYearIndividualDollarMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calendarYearIndividualOccurrenceMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calendarYearFamilyDollarMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calendarYearFamilyOccurrenceMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calendarMonthIndividualDollarMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calendarMonthIndividualOccurrenceMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calendarMonthFamilyDollarMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calendarMonthFamilyOccurrenceMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calendarWeekIndividualDollarMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calendarWeekIndividualOccurrenceMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calendarWeekFamilyDollarMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calendarWeekFamilyOccurrenceMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            individualOccurrenceMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            familyOccurrenceMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            codeRulesCalendarMonthMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            codeRulesPlanYearMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            occurrencePerDefinedPeriodMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            codeRulesPerUnitMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AdjudschedsettingsaccountType);
module.exports = AdjudschedsettingsaccountType;