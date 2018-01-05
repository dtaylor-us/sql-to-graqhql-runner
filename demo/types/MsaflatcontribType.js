var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MsaflatcontribType = new GraphQLObjectType({
    name: 'Msaflatcontrib',
    description: '@TODO DESCRIBE ME',

    fields: function getMsaflatcontribFields() {
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

            amount: {
                type: GraphQLString,
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

            eligMonthsFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            eligMonthsThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            eventType: {
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

            relationshipCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            percentageRate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MsaflatcontribType);
module.exports = MsaflatcontribType;