var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var CobrascheddetailsubsidyType = new GraphQLObjectType({
    name: 'Cobrascheddetailsubsidy',
    description: '@TODO DESCRIBE ME',

    fields: function getCobrascheddetailsubsidyFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            cobraSchedDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobraSchedId: {
                type: GraphQLString,
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

            cobraSchedSubsidyName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobraSchedSubsidyDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            presumedAvailabilityInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobraSubsidyApplicabilityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobraSubsidyRunOutType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maximumSubsidyMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobraSubsidyCalcMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobraSubsidyIncomeMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tierSubsidyByFamilyCountInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            newSubsidyEnrollmentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oneTimeSubsidyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobraSubsidyManualReviewInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobraSubsidyReimbMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billToEntityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billToEntityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobraThirdPartyBillType: {
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
            }
        };
    }
});

registerType(CobrascheddetailsubsidyType);
module.exports = CobrascheddetailsubsidyType;