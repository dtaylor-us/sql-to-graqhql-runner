var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimpricingdetailmodifierType = new GraphQLObjectType({
    name: 'Claimpricingdetailmodifier',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimpricingdetailmodifierFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimPricingOutputDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            position: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            exceptionModifierCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            exceptionModCompVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            globalModifierCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            globalModCompVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ignoreModifierInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            modifierPricedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            modifierPct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierReductionAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            proTechSplitCompDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            proTechSplitCompVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defaultModifierCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defaultModifierCompVersionId: {
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

            claimPricingOutputHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimPricingInputHeaderId: {
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
            }
        };
    }
});

registerType(ClaimpricingdetailmodifierType);
module.exports = ClaimpricingdetailmodifierType;