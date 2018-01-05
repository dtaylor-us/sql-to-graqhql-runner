var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemgroupcontractplanoptmsaType = new GraphQLObjectType({
    name: 'Memgroupcontractplanoptmsa',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgroupcontractplanoptmsaFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractPlanOptionId: {
                type: GraphQLString,
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

            msaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msa: {
                type: getType('Msa'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Msa')
            },

            benefitBundleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleOptionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            remitMemGroupAddressId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coordinatedPaymentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memberCoordinatedPaymentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            electronicEobOnlyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            suppressEoBforNoPaymentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            suppressProviderEobMbrPayeeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allowMemberEobOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            prorationType: {
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

            deleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemgroupcontractplanoptmsaType);
module.exports = MemgroupcontractplanoptmsaType;