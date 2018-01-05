var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BenedeductibleperiodType = new GraphQLObjectType({
    name: 'Benedeductibleperiod',
    description: '@TODO DESCRIBE ME',

    fields: function getBenedeductibleperiodFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            beneDeductibleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitPlanVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deductibleEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deductibleExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prorationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deductibleFudsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            includesCopay: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            familyDedOnlyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            individualDeductible: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            familyDedAccumType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            familyIndivTotal: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            familyDeductibleAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carryoverMonths: {
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

registerType(BenedeductibleperiodType);
module.exports = BenedeductibleperiodType;