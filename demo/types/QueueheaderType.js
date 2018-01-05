var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var QueueheaderType = new GraphQLObjectType({
    name: 'Queueheader',
    description: '@TODO DESCRIBE ME',

    fields: function getQueueheaderFields() {
        return {
            requestDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            requestStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            requestReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lockUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lockDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            requestNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            txfrQueueId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimEventId: {
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

registerType(QueueheaderType);
module.exports = QueueheaderType;