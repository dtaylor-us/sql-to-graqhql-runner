var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BeneaccumbypassType = new GraphQLObjectType({
    name: 'Beneaccumbypass',
    description: '@TODO DESCRIBE ME',

    fields: function getBeneaccumbypassFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            benefitPlanVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bypassId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            beneAccumBypassDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            beneAccumBypassType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            shareBasePlanAccumInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            benefitFulfillmentTextId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            generatedBenefitFulfillmentTextId: {
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

registerType(BeneaccumbypassType);
module.exports = BeneaccumbypassType;