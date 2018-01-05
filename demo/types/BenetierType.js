var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BenetierType = new GraphQLObjectType({
    name: 'Benetier',
    description: '@TODO DESCRIBE ME',

    fields: function getBenetierFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            benefitPlanVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tierNumber: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            tierDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tierEobMember: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            tierEobProvider: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            tierPreExisting: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            reciprocityInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            benefitFulfillmentTextId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            generatedBenefitFulfillmentTextId: {
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

            parStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            outOfCountryInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            defaultCarrierCoinsPct: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            defaultCopayment: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            twentyFourHourCoverageInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            networkAccessType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            excludeProviderDirectoryInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            delegSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dofrSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(BenetierType);
module.exports = BenetierType;