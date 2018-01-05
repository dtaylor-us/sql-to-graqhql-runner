var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SystempermitType = new GraphQLObjectType({
    name: 'Systempermit',
    description: '@TODO DESCRIBE ME',

    fields: function getSystempermitFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            permitName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            systemPermitType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            businessName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            permitEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            permitExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            federalTaxId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            permitState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameMiddle: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stateTaxId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            shortNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            issuingAuthority: {
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

            nameLast: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameFirst: {
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

            phone1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phone1Ext: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phone1Type: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phone2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phone2Ext: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phone2Type: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            email: {
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

registerType(SystempermitType);
module.exports = SystempermitType;