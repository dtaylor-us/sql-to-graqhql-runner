var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var NdcmacrefType = new GraphQLObjectType({
    name: 'Ndcmacref',
    description: '@TODO DESCRIBE ME',

    fields: function getNdcmacrefFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            ndcCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            unitMac: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            packageSize: {
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

            activeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            statusDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(NdcmacrefType);
module.exports = NdcmacrefType;