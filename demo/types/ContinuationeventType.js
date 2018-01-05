var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ContinuationeventType = new GraphQLObjectType({
    name: 'Continuationevent',
    description: '@TODO DESCRIBE ME',

    fields: function getContinuationeventFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            subsAffiliationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            continuationEventType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            qualifyingEventDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            continuationResponsibilityInd: {
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

registerType(ContinuationeventType);
module.exports = ContinuationeventType;