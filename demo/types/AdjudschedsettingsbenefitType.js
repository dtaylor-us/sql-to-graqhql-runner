var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AdjudschedsettingsbenefitType = new GraphQLObjectType({
    name: 'Adjudschedsettingsbenefit',
    description: '@TODO DESCRIBE ME',

    fields: function getAdjudschedsettingsbenefitFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
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

            authPenaltyPctDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authPenaltyAmtDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            copaymentDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            semiPrivateRateDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorExtractDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            compRestorationDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            porcelainCrownDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deductibleDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memCoinsDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            withholdDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deniedTaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servicePctDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reinsReductAmtDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitNotCoveredByBctlvDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tierDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            referralGracePeriodDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            coveringProviderModifierInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            coveringProviderAssignedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            coveringProviderAffiliated: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maximumDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            occurrenceMaxDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxConsecutiveDaysDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            excessAllowedDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            delegatedServicesDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitCodeMatchNotFoundDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalPlanDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            linePreviouslyDelegatedDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authMatchingSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provCertCliadrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provCertAccreditationDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provCertTaxonomyDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provCertBoardCertDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provCertLicenseDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provCertDegreeDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            capitatedServiceDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobAdjustmentDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apportionedPricedDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            multiLinePricedDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            multiLinePricedParentDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AdjudschedsettingsbenefitType);
module.exports = AdjudschedsettingsbenefitType;