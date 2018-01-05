var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaeocrelatedlogType = new GraphQLObjectType({
    name: 'Claeocrelatedlog',
    description: '@TODO DESCRIBE ME',

    fields: function getClaeocrelatedlogFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimLineAdjudicationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            eocSchedRelatedEventId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eocSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claEocTriggerLogId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eocEventStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eocSchedVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eocSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eocSetVersionId: {
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

registerType(ClaeocrelatedlogType);
module.exports = ClaeocrelatedlogType;