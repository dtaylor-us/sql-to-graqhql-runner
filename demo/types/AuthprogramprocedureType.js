var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AuthprogramprocedureType = new GraphQLObjectType({
    name: 'Authprogramprocedure',
    description: '@TODO DESCRIBE ME',

    fields: function getAuthprogramprocedureFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            authProgramTypeId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authProgramAuthServiceTypeId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authMatchingSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authDiagCodeClaimProcCodeCrosswalkInd: {
                type: GraphQLInt,
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

registerType(AuthprogramprocedureType);
module.exports = AuthprogramprocedureType;