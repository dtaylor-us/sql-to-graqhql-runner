var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimheaderdentalType = new GraphQLObjectType({
    name: 'Claimheaderdental',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimheaderdentalFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            dentalClaimType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medicaidInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            epsdtInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            posCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            firstVisitDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerSignatureInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            providerSigDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            radioModelInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            radioModelCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            totalTaxAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalCobPaidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalAllowedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalDeductibleAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalCarrierCoinsPct: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            totalMbrAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            submissionReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            predeterminationBenefitId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            appliancePlacementDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            orthoTreatmentMonthsCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            orthoTreatmentCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            orthoRemainMonths: {
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

            benefitsAssignType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalBilledAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dentalRelCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitsAssignDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimheaderdentalType);
module.exports = ClaimheaderdentalType;