var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MsaaptranstypedefType = new GraphQLObjectType({
    name: 'Msaaptranstypedef',
    description: '@TODO DESCRIBE ME',

    fields: function getMsaaptranstypedefFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            msaVersionId: {
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

            apTransactionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            toMsaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            toMsa: {
                type: getType('Msa'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Msa')
            },

            transferType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            days: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dollarTransferType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transferAmountType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transferMonth1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transDay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transferMonth2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transferMonth3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transferMonth4: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            partialTransferInd: {
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
            }
        };
    }
});

registerType(MsaaptranstypedefType);
module.exports = MsaaptranstypedefType;