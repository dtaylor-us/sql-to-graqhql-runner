var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProviderorglocationcliaType = new GraphQLObjectType({
    name: 'Providerorglocationclia',
    description: '@TODO DESCRIBE ME',

    fields: function getProviderorglocationcliaFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            providerOrgLocationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerOrgId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cliaType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cliaNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cliaMedicareId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cliaTermDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cliaTerminationReason: {
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

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ProviderorglocationcliaType);
module.exports = ProviderorglocationcliaType;