var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProvcontractcarrierfilinglimitType = new GraphQLObjectType({
    name: 'Provcontractcarrierfilinglimit',
    description: '@TODO DESCRIBE ME',

    fields: function getProvcontractcarrierfilinglimitFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            provContractCarrierId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provContractCarrier: {
                type: getType('Carrier'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Carrier')
            },

            provContractVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provContractHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            filingLimitPeriod: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            filingLimitPeriodType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            filingLimitPenaltyPct: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            filingLimitPenaltyAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            filingLimitType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorityFilingLimitInd: {
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
            },

            deleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ProvcontractcarrierfilinglimitType);
module.exports = ProvcontractcarrierfilinglimitType;