var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ThresholdparameterType = new GraphQLObjectType({
    name: 'Thresholdparameter',
    description: '@TODO DESCRIBE ME',

    fields: function getThresholdparameterFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            transactionSet: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            thresholdParameterSource: {
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

            thresholdEntityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            minimumMessageCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memGroupPopulationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            termByOmissionInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            termByOmissionTermDateType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            termByOmissionProcessDateType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fileType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ThresholdparameterType);
module.exports = ThresholdparameterType;