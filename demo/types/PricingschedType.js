var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var PricingschedType = new GraphQLObjectType({
    name: 'Pricingsched',
    description: '@TODO DESCRIBE ME',

    fields: function getPricingschedFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            pricingSchedVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pricingSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingSchedDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            scheduleStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ownerGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            aggregateAllowableInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
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

            opProcedureCodeRequiredInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            doNotAssignInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            drgVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pricingExternalId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalSourceSystemType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            activationDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deactivationDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            drgVersionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ruleSetName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            applyApportionmentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(PricingschedType);
module.exports = PricingschedType;