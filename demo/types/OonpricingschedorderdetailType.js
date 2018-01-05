var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var OonpricingschedorderdetailType = new GraphQLObjectType({
    name: 'Oonpricingschedorderdetail',
    description: '@TODO DESCRIBE ME',

    fields: function getOonpricingschedorderdetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            oonPricingSchedVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonPricingSchedTimelineId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonPricingSchedOrderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalPricingInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            processOrderNumber: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            componentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingComponentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            daysBeforeDueDate: {
                type: GraphQLInt,
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

            sspPackageType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            suppressMprInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            excessOfAllowedRespType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            suppressGlobalModifierInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            primaryCovOnlyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            tradingPartnerConfigId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            largeClaimActionInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            largeClaimActionThresholdAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(OonpricingschedorderdetailType);
module.exports = OonpricingschedorderdetailType;