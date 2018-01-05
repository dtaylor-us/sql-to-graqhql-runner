var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemacctcustomerpurchaseitemType = new GraphQLObjectType({
    name: 'Memacctcustomerpurchaseitem',
    description: '@TODO DESCRIBE ME',

    fields: function getMemacctcustomerpurchaseitemFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memAcctRunId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memAcctCustomerPurchaseDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            productIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            productTypeCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            itemIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planTypeCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fundingArrangementCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planHealthCoverageType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            packageOptionPlanTypeCode: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            generalLedgerBusinessUnitInnIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            generalLedgerBusinessUnitOonIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            generalLedgerOperatingUnitIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            generalLedgerProductIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            generalLedgerLocationIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            generalLedgerCustomerIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            generalLedgerCustomerAtneIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            generalLedgerAccountIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            generalLedgerReinsuranceIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            generalLedgerProjectIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            generalLedgerDepartmentIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            marketSegmentCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            invalidInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            invalidationRunId: {
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

registerType(MemacctcustomerpurchaseitemType);
module.exports = MemacctcustomerpurchaseitemType;