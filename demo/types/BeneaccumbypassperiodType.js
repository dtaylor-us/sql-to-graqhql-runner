var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BeneaccumbypassperiodType = new GraphQLObjectType({
    name: 'Beneaccumbypassperiod',
    description: '@TODO DESCRIBE ME',

    fields: function getBeneaccumbypassperiodFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            benefitPlanVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            beneAccumBypassId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            beneAccumBypassEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            beneAccumBypassExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumDedBypassAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumOopBypassAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumStoplossBypassAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumMaxBypassAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumBypassOccurCount: {
                type: GraphQLInt,
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

registerType(BeneaccumbypassperiodType);
module.exports = BeneaccumbypassperiodType;