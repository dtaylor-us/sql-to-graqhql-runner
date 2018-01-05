var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimdiagnosisType = new GraphQLObjectType({
    name: 'Claimdiagnosis',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimdiagnosisFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            diagnosisCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            presentOnAdmit: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            diagCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            diagCategory: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            admittingDiagInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            principalDiagInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            extCauseDiagInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            patientReasonDiagInd: {
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
            }
        };
    }
});

registerType(ClaimdiagnosisType);
module.exports = ClaimdiagnosisType;