var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProvidereducationType = new GraphQLObjectType({
    name: 'Providereducation',
    description: '@TODO DESCRIBE ME',

    fields: function getProvidereducationFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            providerId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            educationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            educationBeginDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            educationEndDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            degree: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            degreeActive: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            primaryDegreeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            foreignSchoolInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            institutionName: {
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

            email: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cmeDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cmeAccreditOrg: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cmeUnits: {
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
            },

            phoneNum: {
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

            nonUsPhoneInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ProvidereducationType);
module.exports = ProvidereducationType;