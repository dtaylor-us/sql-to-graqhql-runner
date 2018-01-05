var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimpricingexternalrequestType = new GraphQLObjectType({
    name: 'Claimpricingexternalrequest',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimpricingexternalrequestFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimPricingOutputHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimPricingInputHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            requestStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            excessOfAllowedRespType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingMethodType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            returnPricebyDate: {
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

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apcPayerId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ucrPercentile: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalVendorId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalVendor: {
                type: getType('Vendor'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Vendor')
            },

            dateOfServiceFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dateOfServiceThru: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            vendorRoutingType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tradingPartnerConfigId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            returnCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cmsClaimInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimpricingexternalrequestType);
module.exports = ClaimpricingexternalrequestType;