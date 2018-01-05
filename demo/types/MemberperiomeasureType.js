var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemberperiomeasureType = new GraphQLObjectType({
    name: 'Memberperiomeasure',
    description: '@TODO DESCRIBE ME',

    fields: function getMemberperiomeasureFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memberPerioPocketId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            surface1: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surface2: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surface3: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surface4: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surface5: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surface6: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surface7: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surface8: {
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

            measurementDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemberperiomeasureType);
module.exports = MemberperiomeasureType;