var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SystemactuarialvalueType = new GraphQLObjectType({
    name: 'Systemactuarialvalue',
    description: '@TODO DESCRIBE ME',

    fields: function getSystemactuarialvalueFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
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

            metallicLevel: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            groupIndivType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            variant: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            actuarialValueFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            actuarialValueThru: {
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

registerType(SystemactuarialvalueType);
module.exports = SystemactuarialvalueType;