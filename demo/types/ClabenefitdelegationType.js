var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClabenefitdelegationType = new GraphQLObjectType({
    name: 'Clabenefitdelegation',
    description: '@TODO DESCRIBE ME',

    fields: function getClabenefitdelegationFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            includeAllClaimLinesInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            userOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            generateMemberEobInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            generateProviderPraInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            delegationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalRoutingInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            tradingPartnerTxType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            delegationEntityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            delegationEntityId: {
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

            networkId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            network: {
                type: getType('Network'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Network')
            },

            riskArrangeContractVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            riskArangeContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            riskArrangeContractDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            delegSchedVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            delegSchedId: {
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

            servCompServId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servCompServDetailId: {
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

registerType(ClabenefitdelegationType);
module.exports = ClabenefitdelegationType;