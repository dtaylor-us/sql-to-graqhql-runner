var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimpricinguseroverridedetailType = new GraphQLObjectType({
    name: 'Claimpricinguseroverridedetail',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimpricinguseroverridedetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimPricingUserOverrideSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimPricingUserOverrideHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pricedAmtOverride: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricedAmtDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricedAmtOrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parentLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            apportionedPricedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apportionedAdjPricedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billedAdjustmentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            greaterThanBilledInd: {
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

            origPricingInputHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            origPricingOutputDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimpricinguseroverridedetailType);
module.exports = ClaimpricinguseroverridedetailType;