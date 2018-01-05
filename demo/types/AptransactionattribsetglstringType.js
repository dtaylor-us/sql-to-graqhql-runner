var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AptransactionattribsetglstringType = new GraphQLObjectType({
    name: 'Aptransactionattribsetglstring',
    description: '@TODO DESCRIBE ME',

    fields: function getAptransactionattribsetglstringFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            apTransactionAttribSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            generalLedgerString: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            validFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            validThru: {
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

registerType(AptransactionattribsetglstringType);
module.exports = AptransactionattribsetglstringType;