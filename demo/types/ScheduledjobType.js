var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ScheduledjobType = new GraphQLObjectType({
    name: 'Scheduledjob',
    description: '@TODO DESCRIBE ME',

    fields: function getScheduledjobFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            jobStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            jobStatusMsg: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            jobDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            submitDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            taskObject: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            frequencyCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            sysJobId: {
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

            serverName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processedThruDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            nextScheduledDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            scheduleCalculatorClassName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            scheduleCalculatorParam: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            jobFailEmails: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            durationThreshold: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxThreadCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            batchChunkSize: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            jobExecutionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            asyncTaskExecutionInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            nextProcessedThruDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ScheduledjobType);
module.exports = ScheduledjobType;