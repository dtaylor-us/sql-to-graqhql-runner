var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ReportexecutionType = new GraphQLObjectType({
    name: 'Reportexecution',
    description: '@TODO DESCRIBE ME',

    fields: function getReportexecutionFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            reportId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ownerUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            jobSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            reportStorageType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            filePath: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fileName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            outputType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reportResultsRawData: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            criteriaString: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            criteriaDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            faxStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            faxDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            resendCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            faxStatusReasonType: {
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

registerType(ReportexecutionType);
module.exports = ReportexecutionType;