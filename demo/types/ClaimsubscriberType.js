var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimsubscriberType = new GraphQLObjectType({
    name: 'Claimsubscriber',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimsubscriberFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subsAffiliationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parentSubsAffiliationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            submittedWithClaim: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            externalSubId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalIdType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subLocationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalSubIdQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupExternalId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerResposibilitySeqCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameSuffix: {
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

            country: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            countrySubDivision: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nonUsPhoneInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            patientRelationshipCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            insuranceTypeCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimFilingType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityIdCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityTypeQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            weight: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pregnancyInd: {
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

            nameLast: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameFirst: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameMiddle: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            socialSecurityNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            gender: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            birthDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deceasedDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maritalStatus: {
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

            phone: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            employStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            employerName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            relationshipCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameFirstSub: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameSalutation: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorCovMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ethnicity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            citizenshipStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            languageCodeNiso: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            otherCoverageInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            privacyRestrictInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            specHandlingInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            investigationInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            onHoldInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimsubscriberType);
module.exports = ClaimsubscriberType;