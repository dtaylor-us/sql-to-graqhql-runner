var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemgroupcontractplanyearType = new GraphQLObjectType({
    name: 'Memgroupcontractplanyear',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgroupcontractplanyearFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractPlanOptionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractOptId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ratingCountyFips: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ratingState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ratingZip: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benPeriodStartDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benPeriodEndDate: {
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

            regionCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            logicalDeleteReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemgroupcontractplanyearType);
module.exports = MemgroupcontractplanyearType;