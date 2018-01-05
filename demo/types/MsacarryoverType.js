var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MsacarryoverType = new GraphQLObjectType({
    name: 'Msacarryover',
    description: '@TODO DESCRIBE ME',

    fields: function getMsacarryoverFields() {
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

            carryoverSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            carryoverEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carryoverExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carryoverOrder: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carryoverCapType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            indCarryoverCapType: {
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

registerType(MsacarryoverType);
module.exports = MsacarryoverType;