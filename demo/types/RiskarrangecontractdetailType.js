var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var RiskarrangecontractdetailType = new GraphQLObjectType({
    name: 'Riskarrangecontractdetail',
    description: '@TODO DESCRIBE ME',

    fields: function getRiskarrangecontractdetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            riskArrangeContractVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            specialtyDetailDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defaultDofrRiskContrEntityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defaultDelegRiskContrEntityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defineServiceAreaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            inAreaAddressType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reciprocityInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            priceClaimsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pricingSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payCapInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            capitationSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            capPayeeRiskContrEntityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            capRecipientRiskContrEntityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            capRetroPeriod: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            capRetroPeriodDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            includeAssignedMembersOnlyInd: {
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

            fundingSource: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            checkAllCarrierInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkLineOfBusinessInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkProductInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkPlanInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            checkProvAfflInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(RiskarrangecontractdetailType);
module.exports = RiskarrangecontractdetailType;