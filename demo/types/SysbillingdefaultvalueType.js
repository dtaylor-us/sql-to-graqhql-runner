var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SysbillingdefaultvalueType = new GraphQLObjectType({
    name: 'Sysbillingdefaultvalue',
    description: '@TODO DESCRIBE ME',

    fields: function getSysbillingdefaultvalueFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            billingRetroPeriod: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            terminationProrationMethodCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            enrollmentProrationMethodCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billingSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            state: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nonBillableDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            newBornRule: {
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

            carrierId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrier: {
                type: getType('Carrier'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Carrier')
            },

            billingCalcMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tierCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            familyUnitScheduleId: {
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
            }
        };
    }
});

registerType(SysbillingdefaultvalueType);
module.exports = SysbillingdefaultvalueType;