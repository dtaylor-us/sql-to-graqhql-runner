var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimpayeeType = new GraphQLObjectType({
    name: 'Claimpayee',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimpayeeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            idCodeQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            federalTaxId: {
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

            payeeName: {
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

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            createUserId: {
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

            phone: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postalCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            state: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimpayeeType);
module.exports = ClaimpayeeType;