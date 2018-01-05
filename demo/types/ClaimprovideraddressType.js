var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimprovideraddressType = new GraphQLObjectType({
    name: 'Claimprovideraddress',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimprovideraddressFields() {
        return {
            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            extProvLocation: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerOrgLocationId: {
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

            fax: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            country: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimProviderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimProvider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            phoneExt: {
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

            countrySubDivision: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            email: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nonUsPhoneInd: {
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

            addressEntityIdCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provTinAddressesId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimEntityOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimEntityOverrideType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimprovideraddressType);
module.exports = ClaimprovideraddressType;