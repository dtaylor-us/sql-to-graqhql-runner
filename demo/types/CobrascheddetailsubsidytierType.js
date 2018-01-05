var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var CobrascheddetailsubsidytierType = new GraphQLObjectType({
    name: 'Cobrascheddetailsubsidytier',
    description: '@TODO DESCRIBE ME',

    fields: function getCobrascheddetailsubsidytierFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            cobraSchedDetailSubsidyId: {
                type: GraphQLString,
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

            familyMemberCountFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            familyMemberCountThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            agiSingleFilingAmtFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            agiSingleFilingAmtThru: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            agiJointFilingAmtFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            agiJointFilingAmtThru: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            monthlyGrossIncomeAmtFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            monthlyGrossIncomeAmtThru: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobraSubsidyPct: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobraSubsidyAmt: {
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

registerType(CobrascheddetailsubsidytierType);
module.exports = CobrascheddetailsubsidytierType;