var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemberbenefitType = new GraphQLObjectType({
    name: 'Memberbenefit',
    description: '@TODO DESCRIBE ME',

    fields: function getMemberbenefitFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            member: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            planId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitType: {
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

            carrierId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrier: {
                type: getType('Carrier'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Carrier')
            },

            subscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subsAffiliationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            coverageType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            noSubCovInd: {
                type: GraphQLInt,
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

            termMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            qualifyingEvent: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            networkScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lineOfBusinessId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractOptId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractPlanOptionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            productId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            product: {
                type: getType('Product'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Product')
            },

            controlPlanId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleOptionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrierLineOfBusinessId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrierLobPlanBrandingEntity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            standardCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            variant: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            riderBenefitType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonCarrierId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonCarrier: {
                type: getType('Carrier'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Carrier')
            },

            termMemberBenefitReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            courtDecreePrimaryInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            parentSubsAffiliationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lastEnrollmentTransactionDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonCarrierLineOfBusinessId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonLineOfBusinessId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eventDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lateEnrollmentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memGroupPopulationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalEffectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            byPassInsRuleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            bypassInsRuleReasonType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            proposedEffectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            proposedExpirationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemberbenefitType);
module.exports = MemberbenefitType;