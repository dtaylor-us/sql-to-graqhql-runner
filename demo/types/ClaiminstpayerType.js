var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaiminstpayerType = new GraphQLObjectType({
    name: 'Claiminstpayer',
    description: '@TODO DESCRIBE ME',

    fields: function getClaiminstpayerFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            instClaimIcn: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrierId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrier: {
                type: getType('Carrier'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Carrier')
            },

            externalProviderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalProvider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            paidAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            estAmtDue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subNameLast: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subNameFirst: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subNameMiddle: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            instRelCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subsGroupName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subsGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorAuthNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            organizationName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            employerName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerAssignCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            otherProviderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            otherProvider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            subsUniqueId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            extHealthPlanId: {
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

            benefitsAssignType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalSubId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaiminstpayerType);
module.exports = ClaiminstpayerType;