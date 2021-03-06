var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemgroupcontactphoneassignType = new GraphQLObjectType({
    name: 'Memgroupcontactphoneassign',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgroupcontactphoneassignFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupContactPhoneId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContactAssignmentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            preferredInd: {
                type: GraphQLInt,
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

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContactId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemgroupcontactphoneassignType);
module.exports = MemgroupcontactphoneassignType;