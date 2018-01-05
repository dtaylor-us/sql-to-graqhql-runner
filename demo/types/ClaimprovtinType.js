var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimprovtinType = new GraphQLObjectType({
    name: 'Claimprovtin',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimprovtinFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            provTinName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            natlProviderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            natlProvider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            provTinid: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerTin: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provTinAddressesId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            referenceIdQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            secondaryIdg2Code: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            secondaryIdluCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stateLicenseNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            upinNum: {
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

            taxonomyCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phoneExt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nonUsPhoneInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            payToAddressLine1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payToAddressLine2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payToAddressLine3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payToAddressLine4: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payToAddressLine5: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payToCity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payToState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payToPostalCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payToCountry: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payToCountrySubDivision: {
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

            payToEntityIdCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payToEntityTypeQual: {
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
            }
        };
    }
});

registerType(ClaimprovtinType);
module.exports = ClaimprovtinType;