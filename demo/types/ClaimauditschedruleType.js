var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimauditschedruleType = new GraphQLObjectType({
    name: 'Claimauditschedrule',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimauditschedruleFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimAuditSchedVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimAuditSchedRuleDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            auditAction: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            auditTheAuditorOnlyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dollarThresholdAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dollarThresholdBap: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceLineCountThreshold: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            multiDiagnosisOperator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            multiProcedureOperator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            multiBenefitCodeOperator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            effectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expirationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procCodeInclExclOperator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            diagCodeInclExclOperator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimTypeInclExclOperator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitInclExclOperator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingMethodInclExclOperator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            posInclExclOperator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provSpecialtyInclExclOperator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billTypeInclExclOperator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerInclExclOperator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            revenueInclExclOperator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierInclExclOperator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            delegEntityInclExclOperator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            covSequenceInclExclOperator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stateType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stateInclExclOperator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            applicableToEncounterInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            fundingSource: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            networkInclExclOperator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
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
            }
        };
    }
});

registerType(ClaimauditschedruleType);
module.exports = ClaimauditschedruleType;