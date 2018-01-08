var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimpricingoutputheaderType = new GraphQLObjectType({
    name: 'Claimpricingoutputheader',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimpricingoutputheaderFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
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

            pricingMethodType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            winningHeaderInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            excessOfAllowedRespType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingSchedVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonPricingSchedOrderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            editCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            holdCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            manualReviewInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            specialProcessingInst: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimClassId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            drgVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            drgCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            drgService: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            drgRate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            drgWeight: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apcPricedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memberAgeAtEarliestDosLcd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pricingCompleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            finalPricingCompleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            geoZip: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ucrPercentile: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            earliestCaseRateDos: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nonTerminalEditCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            aggregateAllowableInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            suppressHeaderInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            applyApportionmentInd: {
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

            pricingCompareType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimpricingoutputheaderType);
module.exports = ClaimpricingoutputheaderType;