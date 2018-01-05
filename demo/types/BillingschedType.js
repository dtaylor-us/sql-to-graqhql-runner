var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BillingschedType = new GraphQLObjectType({
    name: 'Billingsched',
    description: '@TODO DESCRIBE ME',

    fields: function getBillingschedFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            schedDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billingSchedType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billingCalcMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            familyUnitScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bandPmpmRateInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pmpmFlatRate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            enrollmentProrationMethodCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            terminationProrationMethodCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            newBornRule: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nonBillableDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            billingRetroPeriod: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            currency: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ownerGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            doNotAssignInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            scheduleStatus: {
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

            assignedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            flatRate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billingCalcPeriod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(BillingschedType);
module.exports = BillingschedType;