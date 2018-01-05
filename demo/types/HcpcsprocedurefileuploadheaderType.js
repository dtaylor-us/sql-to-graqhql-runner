var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var HcpcsprocedurefileuploadheaderType = new GraphQLObjectType({
    name: 'Hcpcsprocedurefileuploadheader',
    description: '@TODO DESCRIBE ME',

    fields: function getHcpcsprocedurefileuploadheaderFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            fileName: {
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
            },

            hcpcsDentalFileName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            hcpcsDentalEffectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(HcpcsprocedurefileuploadheaderType);
module.exports = HcpcsprocedurefileuploadheaderType;