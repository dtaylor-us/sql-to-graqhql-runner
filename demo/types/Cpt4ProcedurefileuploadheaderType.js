var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var Cpt4ProcedurefileuploadheaderType = new GraphQLObjectType({
    name: 'Cpt4Procedurefileuploadheader',
    description: '@TODO DESCRIBE ME',

    fields: function getCpt4ProcedurefileuploadheaderFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            fileName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            asaFileName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            asaEffectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medicareFileName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medicareEffectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            jobSubmissionDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            jobSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            recordsTotal: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recordsProcessed: {
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

registerType(Cpt4ProcedurefileuploadheaderType);
module.exports = Cpt4ProcedurefileuploadheaderType;