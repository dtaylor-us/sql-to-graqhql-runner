var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var OppservicecompdetailpricingType = new GraphQLObjectType({
    name: 'Oppservicecompdetailpricing',
    description: '@TODO DESCRIBE ME',

    fields: function getOppservicecompdetailpricingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            oppServiceCompDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oppServiceCompVersionId: {
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

            periodFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            periodThru: {
                type: GraphQLInt,
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

            reimbDollarValue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reimbPercentValue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            notToExceedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            previousPeriodOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            componentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingComponentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingComponentDefaultPct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            percentOfCompPrice: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureCodeNotRequiredInd: {
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

            defaultPctPayFallThruInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(OppservicecompdetailpricingType);
module.exports = OppservicecompdetailpricingType;