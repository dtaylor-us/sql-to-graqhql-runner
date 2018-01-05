var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var UmauthbeddayrangeType = new GraphQLObjectType({
    name: 'Umauthbeddayrange',
    description: '@TODO DESCRIBE ME',

    fields: function getUmauthbeddayrangeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            umAuthServiceId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            umAuthId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            startDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            endDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            revenueCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            decisionOutcomeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            clinicalDecisionCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimInstructions: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            negotiatedRate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            negotiatedRateType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bedDayDecisionSequenceNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bedDayType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allowedBedDayCount: {
                type: GraphQLInt,
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
            }
        };
    }
});

registerType(UmauthbeddayrangeType);
module.exports = UmauthbeddayrangeType;