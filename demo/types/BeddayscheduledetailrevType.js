var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BeddayscheduledetailrevType = new GraphQLObjectType({
    name: 'Beddayscheduledetailrev',
    description: '@TODO DESCRIBE ME',

    fields: function getBeddayscheduledetailrevFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            bedDayScheduleDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bedDayScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            revenueCodeFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            revenueCodeThru: {
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

registerType(BeddayscheduledetailrevType);
module.exports = BeddayscheduledetailrevType;