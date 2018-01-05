var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemacctcustomerpurchasedetailType = new GraphQLObjectType({
    name: 'Memacctcustomerpurchasedetail',
    description: '@TODO DESCRIBE ME',

    fields: function getMemacctcustomerpurchasedetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memAcctRunId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            customerPurchaseIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            customerPurchaseEffectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            customerPurchaseTerminationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            customerPurchaseSitusStateCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coverageMonthStartDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coverageMonthEndDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            generalLedgerIdbDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ratingFipsCountyCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ratingPostalCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            packageOptionHiosPlanIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            metallicLevelCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            customerAccountIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            businessSegmentIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            legalEntityIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonLegalEntityIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            customerAccountEffectiveStartDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            customerAccountTerminationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            salesOfficeCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            exchangeTypeCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            organizationIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            organizationTypeCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            voluntaryAssociationIdentifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reportingYearValue: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            employeeCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            employeeCountMethodCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaCode: {
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

registerType(MemacctcustomerpurchasedetailType);
module.exports = MemacctcustomerpurchasedetailType;