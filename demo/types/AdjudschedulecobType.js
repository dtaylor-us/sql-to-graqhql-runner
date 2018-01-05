var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AdjudschedulecobType = new GraphQLObjectType({
    name: 'Adjudschedulecob',
    description: '@TODO DESCRIBE ME',

    fields: function getAdjudschedulecobFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            cobExaminerInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobExclCapClaimInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobBaseAllowable: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobInclDdblInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobInclCopayInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobInclCoinsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobPtRespAmtInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobRetroCopayInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobRetroMemCoinsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobDentalCalc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobInstCalc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobProfCalc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobRxCalc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobSbCalc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobDefaultCalc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobReservesDdblInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobReservesCopayInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobReservesCoinsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobRetroDdblInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            enableCobInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            enableCobBankInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            enableCobCarOvrInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobResCarryover: {
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

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
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

registerType(AdjudschedulecobType);
module.exports = AdjudschedulecobType;