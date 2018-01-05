var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AccumcobreserveType = new GraphQLObjectType({
    name: 'Accumcobreserve',
    description: '@TODO DESCRIBE ME',

    fields: function getAccumcobreserveFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            member: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            planId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lifetimeAccumulationInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            planYearStartDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planYearEndDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobReserveAccumAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobReserveUsageAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobReserveNetBalanceAmt: {
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

registerType(AccumcobreserveType);
module.exports = AccumcobreserveType;