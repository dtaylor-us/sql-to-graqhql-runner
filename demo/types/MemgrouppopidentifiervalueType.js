var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemgrouppopidentifiervalueType = new GraphQLObjectType({
    name: 'Memgrouppopidentifiervalue',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgrouppopidentifiervalueFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupPopIdentifierId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupPopulationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            referenceCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            valueNumberFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            valueNumberTo: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            valueNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            valueText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            valueDateFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            valueDateTo: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            valueDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            operatorType: {
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
            }
        };
    }
});

registerType(MemgrouppopidentifiervalueType);
module.exports = MemgrouppopidentifiervalueType;