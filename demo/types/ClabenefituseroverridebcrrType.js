var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClabenefituseroverridebcrrType = new GraphQLObjectType({
    name: 'Clabenefituseroverridebcrr',
    description: '@TODO DESCRIBE ME',

    fields: function getClabenefituseroverridebcrrFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claBenefitUserOverrideId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineAdjudicationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deniedAmtOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            denyReasonCodeOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deniedQtyOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bcrrOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            denyClassification: {
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

registerType(ClabenefituseroverridebcrrType);
module.exports = ClabenefituseroverridebcrrType;