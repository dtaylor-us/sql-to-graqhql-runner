var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MsafuscontriblevelType = new GraphQLObjectType({
    name: 'Msafuscontriblevel',
    description: '@TODO DESCRIBE ME',

    fields: function getMsafuscontriblevelFields() {
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

            arTransactionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sequenceNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            familyLevel: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            amount: {
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
            }
        };
    }
});

registerType(MsafuscontriblevelType);
module.exports = MsafuscontriblevelType;