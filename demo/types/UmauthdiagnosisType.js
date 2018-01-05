var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var UmauthdiagnosisType = new GraphQLObjectType({
    name: 'Umauthdiagnosis',
    description: '@TODO DESCRIBE ME',

    fields: function getUmauthdiagnosisFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            umAuthId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            diagnosisSequenceNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            diagCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            diagnosisCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            diagnosisOtherText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            primaryInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            admitInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            logicalDeleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(UmauthdiagnosisType);
module.exports = UmauthdiagnosisType;