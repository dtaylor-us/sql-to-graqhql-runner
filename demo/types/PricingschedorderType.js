var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var PricingschedorderType = new GraphQLObjectType({
    name: 'Pricingschedorder',
    description: '@TODO DESCRIBE ME',

    fields: function getPricingschedorderFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            pricingSchedVersionId: {
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
            },

            deleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            transferPricingShortTermInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            transferPricingPostAcuteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            transferPricingSpecialPayInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            apcPricingType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apcPayerId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apcPmtPct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apcFacilityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(PricingschedorderType);
module.exports = PricingschedorderType;