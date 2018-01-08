var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemberType = new GraphQLObjectType({
    name: 'Member',
    description: '@TODO DESCRIBE ME',

    fields: function getMemberFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
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

            nameSalutation: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            birthSequenceNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            nameSuffix: {
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

            privacyType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reviewClaimsInd: {
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

            nameSuffixTitle: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ssnStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            preferredCommMethodType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            preferredCorrespondenceType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            raceEthnicityLangCollectCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameFirstNoSpecialCharacters: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameLastNoSpecialCharacters: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameMiddleNoSpecialCharacters: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimAuditType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimAuditInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemberType);
module.exports = MemberType;