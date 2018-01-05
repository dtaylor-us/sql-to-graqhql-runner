var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AdjudschedsettingsmemgroupType = new GraphQLObjectType({
    name: 'Adjudschedsettingsmemgroup',
    description: '@TODO DESCRIBE ME',

    fields: function getAdjudschedsettingsmemgroupFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
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
            },

            maxNoSignatureClaims: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            referralGracePeriodDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            accidentInvClaimBillThreshold: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accidentDaysBefore: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            accidentDaysAfter: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ipAuthGracePeriods: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            opAuthGracePeriods: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            opfAuthGracePeriods: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimAuditSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AdjudschedsettingsmemgroupType);
module.exports = AdjudschedsettingsmemgroupType;