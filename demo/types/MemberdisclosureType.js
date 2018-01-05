var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemberdisclosureType = new GraphQLObjectType({
    name: 'Memberdisclosure',
    description: '@TODO DESCRIBE ME',

    fields: function getMemberdisclosureFields() {
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

            disclosureType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            disclosureDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            organizationName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameFirst: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameLast: {
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

            phone: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phoneExt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phoneType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            email: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberAuthInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            shortNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memNameInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memberIdInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memSsnInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memMedRecInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memAddressInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memPhoneInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memFaxInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memEmailInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memAgeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memAdmitInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memberDiagInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memberProcInd: {
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

            address3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            address4: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            address5: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemberdisclosureType);
module.exports = MemberdisclosureType;