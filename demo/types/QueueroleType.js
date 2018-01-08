var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var QueueroleType = new GraphQLObjectType({
    name: 'Queuerole',
    description: '@TODO DESCRIBE ME',

    fields: function getQueueroleFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            queueType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            queueRoleDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameFilter: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memGroupFilter: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            carrierFilter: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            lobFilter: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimTypeFilter: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            editCodeFilter: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            provTinidFilter: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            providerIdFilter: {
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
            },

            routingCodeFilter: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            sourceTypeFilter: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(QueueroleType);
module.exports = QueueroleType;