var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var OppservicecompdetailType = new GraphQLObjectType({
    name: 'Oppservicecompdetail',
    description: '@TODO DESCRIBE ME',

    fields: function getOppservicecompdetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
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

            priority: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            opsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pricingServiceCategory: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            periodType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            passThruCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payFallThruPricedLinesInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            greaterThanBilledInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            procedureSetCatId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            opsMultProcRedExcInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            opsExcWOtherOpsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            opsOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            excludeFromOutlierInd: {
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

            deleteInd: {
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

            notEligibleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ignoreOpProcCodeReqInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(OppservicecompdetailType);
module.exports = OppservicecompdetailType;