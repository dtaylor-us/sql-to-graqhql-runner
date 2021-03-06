var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AccumumauthbeddaytxType = new GraphQLObjectType({
    name: 'Accumumauthbeddaytx',
    description: '@TODO DESCRIBE ME',

    fields: function getAccumumauthbeddaytxFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            accumUmAuthBedDayId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineAdjudicationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            nonClaimAdjustInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            accumAdjustmentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adjustmentDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bedDayAccumCount: {
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

registerType(AccumumauthbeddaytxType);
module.exports = AccumumauthbeddaytxType;