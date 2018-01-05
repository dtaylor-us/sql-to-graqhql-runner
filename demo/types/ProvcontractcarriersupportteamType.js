var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProvcontractcarriersupportteamType = new GraphQLObjectType({
    name: 'Provcontractcarriersupportteam',
    description: '@TODO DESCRIBE ME',

    fields: function getProvcontractcarriersupportteamFields() {
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

            provContractSupportTeamId: {
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

registerType(ProvcontractcarriersupportteamType);
module.exports = ProvcontractcarriersupportteamType;