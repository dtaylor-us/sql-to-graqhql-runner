var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimmemberType = new GraphQLObjectType({
    name: 'Claimmember',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimmemberFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memberExternalId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalIdType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            depRecSeqNum: {
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

            maritalStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberAddressId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            relationshipCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deceasedDate: {
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

            weight: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pregnancyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            nonUsPhoneInd: {
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

            nameSuffix: {
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

            memCountryCode: {
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
            }
        };
    }
});

registerType(ClaimmemberType);
module.exports = ClaimmemberType;