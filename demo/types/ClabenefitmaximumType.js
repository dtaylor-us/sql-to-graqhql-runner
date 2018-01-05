var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClabenefitmaximumType = new GraphQLObjectType({
    name: 'Clabenefitmaximum',
    description: '@TODO DESCRIBE ME',

    fields: function getClabenefitmaximumFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            userOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            preliminaryDeniedOccurrenceQty: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveDeniedOccurQtyEoc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveDeniedOccurQtyEt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveDeniedOccurQtyAuthReferral: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finalDeniedOccurrenceQty: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            preliminaryOccurBasedMaxReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveDeniedOccurMaxReductAmtEoc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveDeniedOccurMaxReductAmtEt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            preliminaryDollarBasedMaxReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveDollarBasedMaxReductAmtEoc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveDollarBasedMaxReductAmtEt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maximumOverflowAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maximumOverflowInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adjustedDollarBasedMaxAccumAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobDollarBasedMaxAccumAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            preliminaryDollarBasedMaxAccumAmt: {
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

registerType(ClabenefitmaximumType);
module.exports = ClabenefitmaximumType;