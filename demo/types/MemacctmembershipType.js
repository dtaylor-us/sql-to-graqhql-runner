var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemacctmembershipType = new GraphQLObjectType({
    name: 'Memacctmembership',
    description: '@TODO DESCRIBE ME',

    fields: function getMemacctmembershipFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memAcctRunId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memAcctCustomerPurchaseDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memAcctCustomerPurchaseItemId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subscriberIndividualIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subscriberExternalIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            enrolleeIndividualIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            enrolleeExternalIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            membershipEffectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            membershipTerminationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coverageLevelCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eligibilityRelationshipCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medicareEntitlementTypeCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerResponsibilitySequenceCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subscriberResidentStateCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benStatCd: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subscriberCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memberCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            survivingSpouseCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            invalidInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            invalidationRunId: {
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
            }
        };
    }
});

registerType(MemacctmembershipType);
module.exports = MemacctmembershipType;