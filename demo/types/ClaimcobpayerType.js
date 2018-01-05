var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimcobpayerType = new GraphQLObjectType({
    name: 'Claimcobpayer',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimcobpayerFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimCobOtherSubscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            otherPayerPrimaryIdQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            otherPayerPrimaryIdCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            addressLine1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            addressLine2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            addressLine3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            addressLine4: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            addressLine5: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            city: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            state: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postalCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            country: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            countrySubDivision: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            secondaryId1CodeQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            secondaryId1Code: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            secondaryId2CodeQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            secondaryId2Code: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitsAssigmentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            patientSignatureSourceCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            releaseInfoCode: {
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
            }
        };
    }
});

registerType(ClaimcobpayerType);
module.exports = ClaimcobpayerType;