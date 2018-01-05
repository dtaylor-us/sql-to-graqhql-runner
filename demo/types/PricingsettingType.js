var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var PricingsettingType = new GraphQLObjectType({
    name: 'Pricingsetting',
    description: '@TODO DESCRIBE ME',

    fields: function getPricingsettingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            pricingSrvcCatRuleServiceName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimClassRuleServiceName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defaultClaimClassRuleSetName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureSetId: {
                type: GraphQLString,
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

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            statModifierCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingSystemHoldCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingDosTypeRuleServiceName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defaultPricingDosTypeRuleSetName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingDosLineClassRuleServiceName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defaultPricingDosLineClassRuleSetName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonPricingCmsBasedServiceAreaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ndcRunoutYears: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            drgTradingPartnerConfigId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apcTradingPartnerConfigId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonPricingServiceTypeRuleServ: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            vendorRemarkRuleServiceName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            vendorRemarkRuleSetName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            vendorActionRuleServiceName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            vendorActionRuleSetName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonPricingServiceTypeRuleSetName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(PricingsettingType);
module.exports = PricingsettingType;