var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimcobothersubscriberType = new GraphQLObjectType({
    name: 'Claimcobothersubscriber',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimcobothersubscriberFields() {
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

            payerSequenceCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            patientRelationshipCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            insuredGroupNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            groupName: {
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

            nameSuffix: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            idCodeQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            idCode: {
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

            secondaryIdCodeQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            secondaryIdCode: {
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

            employerName: {
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

            cobInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memberCobid: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalCarrierProviderParStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimcobothersubscriberType);
module.exports = ClaimcobothersubscriberType;