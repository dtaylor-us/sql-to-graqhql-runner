var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var EocschedrelatedeventType = new GraphQLObjectType({
    name: 'Eocschedrelatedevent',
    description: '@TODO DESCRIBE ME',

    fields: function getEocschedrelatedeventFields() {
        return {
            eocSchedRelatedEventId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            eocSchedRelatedName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eocSchedRelatedDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eocSchedVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            relatedTierLevel: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            triggerDenyAction: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerMatchInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            timeoutPeriod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            timeoutPeriodType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            effectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expirationDate: {
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
            },

            eocDateType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(EocschedrelatedeventType);
module.exports = EocschedrelatedeventType;