var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemgrouppriorcarrierType = new GraphQLObjectType({
    name: 'Memgrouppriorcarrier',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgrouppriorcarrierFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            customerAccountId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            healthCoverageType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            historyConversionOfferedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            priorCarrier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorCarrierOtherName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorCoverageStartDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorCoverageEndDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            runoutPeriod: {
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

registerType(MemgrouppriorcarrierType);
module.exports = MemgrouppriorcarrierType;