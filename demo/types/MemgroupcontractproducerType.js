var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemgroupcontractproducerType = new GraphQLObjectType({
    name: 'Memgroupcontractproducer',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgroupcontractproducerFields() {
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

            producerId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            producer: {
                type: getType('Producer'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Producer')
            },

            producerPctOfPremium: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            perEmployeePerMonthAmount: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            producerType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            writingAgentId: {
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

            overridePepmAmount: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            overrideProducerPctofPremium: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            noCommissionInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemgroupcontractproducerType);
module.exports = MemgroupcontractproducerType;