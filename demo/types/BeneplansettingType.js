var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BeneplansettingType = new GraphQLObjectType({
    name: 'Beneplansetting',
    description: '@TODO DESCRIBE ME',

    fields: function getBeneplansettingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            benefitPlanVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benPlanEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benPlanExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimSource: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sourceId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            autoAdjudicateDft: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
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

            formularyScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            familyUnitScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fulfillmentSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            disabilAgeLimWaiver: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobReserveMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            varyOdbByEmployStatus: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            orderBeneRule: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobWithAutoPolicy: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaRange: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimantHomeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memberWorkInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pcpPracticeLocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            networkHospInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            outOfAreaDefinition: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            preXConditionsLimit: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            preXMaxPayable: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            preXPriorPeriod: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            preXPriorPeriodDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            preXWaitingPeriod: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            preXWaitingPeriodDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            preXWaitLateEnroll: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            preXWaitLateEnrollDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benchmarkInd: {
                type: GraphQLInt,
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
            },

            groupCountFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            groupCountThru: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            employeeCountType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coverAdmitOnTermInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxAdmitOnTerm: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxAdmitOnTermDm: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            remarkCodeScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            applyNonCoveredWriteoffInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adjudScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            religiousExemption: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            tierOverrideType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaMileageType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allowOonPricingPctOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            eocSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            hsaEligibleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            hraEligibleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            transitionalReliefInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            grandfatheredInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            erisaCompliantInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            servCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billingSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allowBillingSetOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            clinicalEditSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ehbInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            provCertSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            excludeSalesTaxInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            crossAccumByPrimOopInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            salesServiceAreaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medPolicySchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authDecisionActionScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobInnInnAllowedType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobInnOonAllowedType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobOonInnAllowedType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobOonOonAllowedType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobRemainingBalancePct: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobExtDefaultParStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitFulfillmentTextId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            generatedBenefitFulfillmentTextId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            beneLanguageSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            generatedBeneLanguageSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            timelyFilingSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimAuditSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            useBasePlanMedPolicyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            medPolicySetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(BeneplansettingType);
module.exports = BeneplansettingType;