var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var InvalidclaimediType = new GraphQLObjectType({
    name: 'Invalidclaimedi',
    description: '@TODO DESCRIBE ME',

    fields: function getInvalidclaimediFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimSource: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            extClaimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimReceiptDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subscriberSsn: {
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

            incomingData: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            invalidReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(InvalidclaimediType);
module.exports = InvalidclaimediType;