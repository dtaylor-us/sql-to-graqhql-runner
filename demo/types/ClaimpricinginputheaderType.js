var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimpricinginputheaderType = new GraphQLObjectType({
    name: 'Claimpricinginputheader',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimpricinginputheaderFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lineOfBusinessId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingSetVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            typeOfBill: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fundingSource: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            earliestDateOfService: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            latestDateOfService: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            invoiceAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            birthDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerParStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            gender: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            situsState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            admissionTypeCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            admissionSourceCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            patientStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonPricingSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonPricingSchedVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            primaryProviderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            primaryProvider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            providerTaxonomy: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerOrgType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerPostalCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            conditionCodeList: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            occurrenceCodeList: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            valueCodeList: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            diagCodeList: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureCodeList: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimEventId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            forceRepricingInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pricingDosType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingDos: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            earliestPricingDos: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            latestPricingDos: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitTierParStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            netContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonPricingServiceTypeAndPctList: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deleteInd: {
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
            },

            primaryCoverageInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleOptionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provContractVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            netContractVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimpricinginputheaderType);
module.exports = ClaimpricinginputheaderType;