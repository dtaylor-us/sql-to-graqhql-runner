var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimlineprofrxType = new GraphQLObjectType({
    name: 'Claimlineprofrx',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimlineprofrxFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            rxServiceReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxProfServCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxServiceResult: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxProviderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxProvider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            rxProviderIdQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxDiagnosisCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxDiagCodeQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxProfFeeTax: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxProfFee: {
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

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimlineprofrxType);
module.exports = ClaimlineprofrxType;