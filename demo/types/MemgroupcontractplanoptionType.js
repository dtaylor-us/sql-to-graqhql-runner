var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemgroupcontractplanoptionType = new GraphQLObjectType({
    name: 'Memgroupcontractplanoption',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgroupcontractplanoptionFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractOptId: {
                type: GraphQLString,
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

            billingSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contractPlanOptionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            checkPlanOptionNetworkInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            overrideBillingSetFromPlanInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allowBuyUpInd: {
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

            billByNetworkInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            requiresActiveReenrollmentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            carrierLobPlanId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            beneStandardCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eocSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msa: {
                type: getType('Msa'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Msa')
            },

            allowMemAdjOrderInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            spendGraceDollarsFirstInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allowMemGracePeriodOrderInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            overrideBenPlanAddrInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            overrideBenPlanPhoneInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            printPcPonIdCardInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractBillingPrefId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleOptionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleStandardCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planOptionDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            domesticPartnerInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageUpInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adminVendorId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adminVendor: {
                type: getType('Vendor'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Vendor')
            }
        };
    }
});

registerType(MemgroupcontractplanoptionType);
module.exports = MemgroupcontractplanoptionType;