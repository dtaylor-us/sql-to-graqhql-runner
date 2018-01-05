var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ContinuationsecondaryeventType = new GraphQLObjectType({
    name: 'Continuationsecondaryevent',
    description: '@TODO DESCRIBE ME',

    fields: function getContinuationsecondaryeventFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            continuationEventMemberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            continuationEventMember: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            continuationEventId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subsAffiliationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dependentSubsAffiliationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            member: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            subscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            qualifyingEventDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            continuationEventType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            qualifyingEventNotificationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            continuationExtensionMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ContinuationsecondaryeventType);
module.exports = ContinuationsecondaryeventType;