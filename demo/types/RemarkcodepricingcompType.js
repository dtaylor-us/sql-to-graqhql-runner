var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var RemarkcodepricingcompType = new GraphQLObjectType({
    name: 'Remarkcodepricingcomp',
    description: '@TODO DESCRIBE ME',

    fields: function getRemarkcodepricingcompFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            componentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingPercentage: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            triggerRemarksByPercentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            remarkCodeTriggerId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            remarkCodeScheduleId: {
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

registerType(RemarkcodepricingcompType);
module.exports = RemarkcodepricingcompType;