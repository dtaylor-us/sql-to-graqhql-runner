var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ContinuationeventmemberType = new GraphQLObjectType({
    name: 'Continuationeventmember',
    description: '@TODO DESCRIBE ME',

    fields: function getContinuationeventmemberFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
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

            continuationEffectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            continuationExhaustionDate: {
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

registerType(ContinuationeventmemberType);
module.exports = ContinuationeventmemberType;