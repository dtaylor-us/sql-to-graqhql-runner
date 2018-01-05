var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var HoldcodeType = new GraphQLObjectType({
    name: 'Holdcode',
    description: '@TODO DESCRIBE ME',

    fields: function getHoldcodeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            shortDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            descriptionText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            holdPremium: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdCapitation: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdClaimPayment: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdClaimAdjudicationInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cascadeToDependents: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            providerHcInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memberHcInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memGroupHcInd: {
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

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdElig: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdContrib: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdConfStmtsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdMedcoRtbe: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdManlContrib: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdCac: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            providerOrgHcInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdPricingInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            contractHcInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            scheduleHcInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdFulfillmentIdCardsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdFulfillmentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            holdDownstreamEligibilityInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractPlanOptHcInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            systemHcInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(HoldcodeType);
module.exports = HoldcodeType;