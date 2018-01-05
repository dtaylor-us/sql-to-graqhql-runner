var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var UmauthservicedecisionType = new GraphQLObjectType({
    name: 'Umauthservicedecision',
    description: '@TODO DESCRIBE ME',

    fields: function getUmauthservicedecisionFields() {
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

            decisionSequenceNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            decisionType: {
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

            gapReviewOutcome: {
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

            decisionRenderedDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(UmauthservicedecisionType);
module.exports = UmauthservicedecisionType;