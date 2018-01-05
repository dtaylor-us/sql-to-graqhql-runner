var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var UcrcompdetailprofType = new GraphQLObjectType({
    name: 'Ucrcompdetailprof',
    description: '@TODO DESCRIBE ME',

    fields: function getUcrcompdetailprofFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            ucrCompDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            geoZip: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            procCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            systemTypeValue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            percentile50: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            percentile60: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            percentile70: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            percentile75: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            percentile80: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            percentile85: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            percentile90: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            percentile95: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            manualReviewInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            specialProcessingInst: {
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

            ucrCompVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(UcrcompdetailprofType);
module.exports = UcrcompdetailprofType;