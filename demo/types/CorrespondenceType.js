var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var CorrespondenceType = new GraphQLObjectType({
    name: 'Correspondence',
    description: '@TODO DESCRIBE ME',

    fields: function getCorrespondenceFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            dcnId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            batchNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            correspondenceOriginalReceiptDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            correspondenceTransmitCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            correspondenceInvalidInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            correspondenceType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            correspondenceReportType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            correspondenceSourceLocationCd: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            correspondenceUrl: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            correspondenceIndexedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            correspondenceLockedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            correspondenceLockUserId: {
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

registerType(CorrespondenceType);
module.exports = CorrespondenceType;