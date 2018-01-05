var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AuthprogramprocdiagnosisType = new GraphQLObjectType({
    name: 'Authprogramprocdiagnosis',
    description: '@TODO DESCRIBE ME',

    fields: function getAuthprogramprocdiagnosisFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            authProgramProcedureId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authProgramAuthServiceTypeId: {
                type: GraphQLString,
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

            diagCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            diagnosisCode: {
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
            }
        };
    }
});

registerType(AuthprogramprocdiagnosisType);
module.exports = AuthprogramprocdiagnosisType;