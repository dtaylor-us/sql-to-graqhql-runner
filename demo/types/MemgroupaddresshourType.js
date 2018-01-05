var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemgroupaddresshourType = new GraphQLObjectType({
    name: 'Memgroupaddresshour',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgroupaddresshourFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupAddressId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            addressHoursType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dayOfWeek: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            openTime: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            closeTime: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            timeZoneCode: {
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

registerType(MemgroupaddresshourType);
module.exports = MemgroupaddresshourType;