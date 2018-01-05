var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemgroupcontractplanoptholdType = new GraphQLObjectType({
    name: 'Memgroupcontractplanopthold',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgroupcontractplanoptholdFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractPlanOptionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractOptId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            holdCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            shortNote: {
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
            }
        };
    }
});

registerType(MemgroupcontractplanoptholdType);
module.exports = MemgroupcontractplanoptholdType;