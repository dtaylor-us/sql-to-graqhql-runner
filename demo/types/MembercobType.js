var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MembercobType = new GraphQLObjectType({
    name: 'Membercob',
    description: '@TODO DESCRIBE ME',

    fields: function getMembercobFields() {
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

            effectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expirationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobSubscriberId: {
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

            payerResponsibilitySeqCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobMemberGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobMemberGroupName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobMemberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobMember: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            cobMemberRelationshipType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accountSuffixCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobServiceTypeCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobCoverageType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobCoverageOriginalEffectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobCoverageEmployeeCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            govtBenefitType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobSubscriberNameFirst: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobSubscriberNameLast: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobSubscriberGender: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobSubscriberBirthDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobSubscriberBenefitStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobSubscriberSsn: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            courtDecreePrimaryInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            medicareEligibilityReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobEntityIdentifierCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobEntityTypeQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobEntityName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobEntityIdCodeQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobRelEntityIdCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MembercobType);
module.exports = MembercobType;