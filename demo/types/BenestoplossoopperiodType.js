var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BenestoplossoopperiodType = new GraphQLObjectType({
    name: 'Benestoplossoopperiod',
    description: '@TODO DESCRIBE ME',

    fields: function getBenestoplossoopperiodFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            beneStoplossOopid: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitPlanVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stoplossOopEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stoplossOopExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prorationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stoplossChargeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oopDeductibleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oopCopayInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            slDeductibleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            slCopaymentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            stoplossFudsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            slCoInsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            slFamilyAccumType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            slFamilyIndivTotal: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oopCoInsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oopFamilyIndivTotal: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            individualStoploss: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            individualOop: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carryoverMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            familySloopOnlyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            familyOopAccumType: {
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

            familyStoplossAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            familyOopAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(BenestoplossoopperiodType);
module.exports = BenestoplossoopperiodType;