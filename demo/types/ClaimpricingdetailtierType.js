var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimpricingdetailtierType = new GraphQLObjectType({
    name: 'Claimpricingdetailtier',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimpricingdetailtierFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimPricingOutputDetailId: {
                type: GraphQLString,
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

            pricingComponentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingCompDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingCompDetailPricingId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ipServiceCompDrgId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ipServiceCompDrg: {
                type: getType('Drg'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Drg')
            },

            ipServiceCompDrgCustomId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            periodType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tierPeriodThru: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tierPeriodFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calculationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            wholeClaimReimbType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tierPricedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            initialDollarAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            initialDollarMultiplier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dollarLimitAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dollarLimitMultiplier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calledCompInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            calledCompDepth: {
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
            }
        };
    }
});

registerType(ClaimpricingdetailtierType);
module.exports = ClaimpricingdetailtierType;