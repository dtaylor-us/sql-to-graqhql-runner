var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ThresholdparameterdetailType = new GraphQLObjectType({
    name: 'Thresholdparameterdetail',
    description: '@TODO DESCRIBE ME',

    fields: function getThresholdparameterdetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            thresholdParameterId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parameterType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parameterPercentage: {
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

            parameterCalculationMethodType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parameterCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ThresholdparameterdetailType);
module.exports = ThresholdparameterdetailType;