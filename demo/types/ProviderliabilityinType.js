var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProviderliabilityinType = new GraphQLObjectType({
    name: 'Providerliabilityin',
    description: '@TODO DESCRIBE ME',

    fields: function getProviderliabilityinFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            liabPolicyType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            policyNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            limitPerClaim: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            limitClaimsAggregate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            liabInsEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            liabInsExpDate: {
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

registerType(ProviderliabilityinType);
module.exports = ProviderliabilityinType;