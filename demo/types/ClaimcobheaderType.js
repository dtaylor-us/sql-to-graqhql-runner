var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimcobheaderType = new GraphQLObjectType({
    name: 'Claimcobheader',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimcobheaderFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimCobOtherSubscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalPaidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalNonCoveredAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalRemPatientLiabilityAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            checkRemittanceDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorAuthNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            referralNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adjustmentIndType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimControlNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            predeterminationBenefitId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobInd: {
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
            }
        };
    }
});

registerType(ClaimcobheaderType);
module.exports = ClaimcobheaderType;