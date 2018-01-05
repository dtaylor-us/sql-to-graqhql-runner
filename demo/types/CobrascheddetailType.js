var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var CobrascheddetailType = new GraphQLObjectType({
    name: 'Cobrascheddetail',
    description: '@TODO DESCRIBE ME',

    fields: function getCobrascheddetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
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

            groupSizeFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            groupSizeThru: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorInsuredDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorInsuredPeriod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxCobraDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxCobraPeriod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            matchPriorToMaxCobraInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobraMaxPremiumPct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobraMemberBenefitId: {
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

registerType(CobrascheddetailType);
module.exports = CobrascheddetailType;