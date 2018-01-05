var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClabenefitcobType = new GraphQLObjectType({
    name: 'Clabenefitcob',
    description: '@TODO DESCRIBE ME',

    fields: function getClabenefitcobFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            userOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobBaseAllowableRule: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobBaseAllowableAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobMemberRespAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobProviderWriteoffAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postedToCobSavingsAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobPaidAmt: {
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

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
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

registerType(ClabenefitcobType);
module.exports = ClabenefitcobType;