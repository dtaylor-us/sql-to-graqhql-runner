var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MsacontribmaxfusType = new GraphQLObjectType({
    name: 'Msacontribmaxfus',
    description: '@TODO DESCRIBE ME',

    fields: function getMsacontribmaxfusFields() {
        return {
            msaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msa: {
                type: getType('Msa'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Msa')
            },

            sequenceNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            effDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contribLevel: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            contribMaxType: {
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

            msaVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MsacontribmaxfusType);
module.exports = MsacontribmaxfusType;