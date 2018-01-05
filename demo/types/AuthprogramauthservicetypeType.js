var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AuthprogramauthservicetypeType = new GraphQLObjectType({
    name: 'Authprogramauthservicetype',
    description: '@TODO DESCRIBE ME',

    fields: function getAuthprogramauthservicetypeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            authProgramTypeId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authMatchingSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceSettingType: {
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

            procedureCodeMatchingInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            diagnosisCodeMatchingInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            partialDateMatchingInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            billingProviderMatchingInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            renderingProviderMatchingInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            gracePeriodsBeforeClaim: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            gracePeriodsAfterClaim: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            authMatchingInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            procedureDiagnosisMatchingType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AuthprogramauthservicetypeType);
module.exports = AuthprogramauthservicetypeType;