var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MedpolicysettimelineschedType = new GraphQLObjectType({
    name: 'Medpolicysettimelinesched',
    description: '@TODO DESCRIBE ME',

    fields: function getMedpolicysettimelineschedFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            medPolicySetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medPolicySetTimelineId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medPolicySchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processOrderNumber: {
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

registerType(MedpolicysettimelineschedType);
module.exports = MedpolicysettimelineschedType;