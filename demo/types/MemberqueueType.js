var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemberqueueType = new GraphQLObjectType({
    name: 'Memberqueue',
    description: '@TODO DESCRIBE ME',

    fields: function getMemberqueueFields() {
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

            nameSalutation: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameSuffix: {
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

            birthSequenceNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deceasedDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ethnicity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maritalStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            citizenshipStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            languageCode1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            languageCode2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            email: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            privacyType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            addressType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            addressEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            addressExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            address1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            address2: {
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

            subscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            relationshipCode: {
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

            nameLastSub: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subNameLast: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subNameFirst: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subGender: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subBirthDate: {
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

            originalReceiptDate: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            requestDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            requestStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            requestReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lockUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lockDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            requestNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            txfrQueueId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            interestApplInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            subNameMiddle: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subMaritalStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subAddress1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subAddress2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subCity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subPostalCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subCountry: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalSubId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupExternalId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimSubscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subsAffiliationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemberqueueType);
module.exports = MemberqueueType;