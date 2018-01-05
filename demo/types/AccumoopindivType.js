var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AccumoopindivType = new GraphQLObjectType({
    name: 'Accumoopindiv',
    description: '@TODO DESCRIBE ME',

    fields: function getAccumoopindivFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            planId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleId: {
                type: GraphQLString,
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

            oopAccumulationAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oopCarryoverAccumulationAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stoplossAccumulationAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stoplossCarryoverAccumAmt: {
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

registerType(AccumoopindivType);
module.exports = AccumoopindivType;