var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimconditionType = new GraphQLObjectType({
    name: 'Claimcondition',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimconditionFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
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

            certConditionInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            conditionCategoryCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            conditionCode1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            conditionCode2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            conditionCode3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            conditionCode4: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            conditionCode5: {
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

registerType(ClaimconditionType);
module.exports = ClaimconditionType;