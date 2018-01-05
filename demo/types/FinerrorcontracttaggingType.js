var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FinerrorcontracttaggingType = new GraphQLObjectType({
    name: 'Finerrorcontracttagging',
    description: '@TODO DESCRIBE ME',

    fields: function getFinerrorcontracttaggingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractOptId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractPlanOptionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            productType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            itemId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContrPlanAttribSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finAttribSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finAttribSchedSegmentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finAttribSchedSegmentDefId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finAttribSchedVariableId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finAttribSchedVariableDefId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ruleServiceName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ruleSetName: {
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

registerType(FinerrorcontracttaggingType);
module.exports = FinerrorcontracttaggingType;