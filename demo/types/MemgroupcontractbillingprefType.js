var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemgroupcontractbillingprefType = new GraphQLObjectType({
    name: 'Memgroupcontractbillingpref',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgroupcontractbillingprefFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billingMemGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billMemGroupLevel: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            consolidateBillingInd: {
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

            languagePreferenceCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            invoiceType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            invoiceGenerationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            invoiceCycleType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            invoiceFormatType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            invoicePresentationMethodType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            premiumBillingPeriodType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentTermsType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContactId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContactAddressId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContactPhoneId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContactElectronicComId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            alphaParentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            childInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            originalSourceSystemType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalSourceSystemId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billingPrefMembershipType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prorationMethodType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prefMonthlyPaymentMethodType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billingPreferenceExternalId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billingPreferenceDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalSourceContactId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemgroupcontractbillingprefType);
module.exports = MemgroupcontractbillingprefType;