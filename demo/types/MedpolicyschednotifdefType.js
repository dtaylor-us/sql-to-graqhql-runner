var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MedpolicyschednotifdefType = new GraphQLObjectType({
    name: 'Medpolicyschednotifdef',
    description: '@TODO DESCRIBE ME',

    fields: function getMedpolicyschednotifdefFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            medPolicySchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medPolicySchedTimelineId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceDescriptionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lateThresholdDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            lateThresholdHours: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            thresholdDaysType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lateThresholdLcd: {
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

registerType(MedpolicyschednotifdefType);
module.exports = MedpolicyschednotifdefType;