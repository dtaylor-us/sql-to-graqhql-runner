var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClabenefitproviderType = new GraphQLObjectType({
    name: 'Clabenefitprovider',
    description: '@TODO DESCRIBE ME',

    fields: function getClabenefitproviderFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            userOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            providerParStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            networkId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            network: {
                type: getType('Network'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Network')
            },

            assignedProvInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            coveringProviderInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            affiliatedProviderInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            referralProviderInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            reciprocityInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            providerDesignation: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provContractVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provContractHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            netContractVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            netContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            netContractHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            riskArrangeContractVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            riskArrangeContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            riskArrangeContractDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            capDeductInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            networkTierNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            taxonomyCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provCertSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provCertSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servCompVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servId: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            servCompServDetailId: {
                type: GraphQLString,
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

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            createUserId: {
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

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClabenefitproviderType);
module.exports = ClabenefitproviderType;