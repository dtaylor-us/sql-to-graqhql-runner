var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AccumerrorType = new GraphQLObjectType({
    name: 'Accumerror',
    description: '@TODO DESCRIBE ME',

    fields: function getAccumerrorFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            transId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumMessageId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transRunDate: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            queueItemStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalRouteCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            icn: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respondingSystemName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respondingSystemId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalSourceSystemName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalSourceSystemId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalPayloadMessage: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ackPayloadMessage: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lockedBy: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            extMemberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            extMember: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            extSubscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberNameLast: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subscriberNameLast: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processFlowType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumDirection: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumErrorQueueName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumErrorCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            closeReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumErrorType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumReprocCounter: {
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

registerType(AccumerrorType);
module.exports = AccumerrorType;