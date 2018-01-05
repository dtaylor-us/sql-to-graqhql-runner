var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AdjudschedpendtemplateType = new GraphQLObjectType({
    name: 'Adjudschedpendtemplate',
    description: '@TODO DESCRIBE ME',

    fields: function getAdjudschedpendtemplateFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            adjudScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fulfillTemplateId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            editCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            initialPendInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            daysFromInitial: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            daysType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pendCloseDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AdjudschedpendtemplateType);
module.exports = AdjudschedpendtemplateType;