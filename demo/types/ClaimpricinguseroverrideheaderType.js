var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimpricinguseroverrideheaderType = new GraphQLObjectType({
    name: 'Claimpricinguseroverrideheader',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimpricinguseroverrideheaderFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prePricedDataOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            revertToOriginalCalcInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            apportionOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            applyApportionmentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            lineOfBusinessId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            situsState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerParStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitTierParStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            earliestPricingDos: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            latestPricingDos: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleOptionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            primaryCoverageInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            provContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            netContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingDosType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingSetVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonPricingSchedVersionId: {
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

registerType(ClaimpricinguseroverrideheaderType);
module.exports = ClaimpricinguseroverrideheaderType;