var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MprcompType = new GraphQLObjectType({
    name: 'Mprcomp',
    description: '@TODO DESCRIBE ME',

    fields: function getMprcompFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            mprCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mprCompDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mprCompVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            mprCompStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ownerGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            doNotAssignInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pricingExternalId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalSourceSystemType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            activationDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deactivationDateTime: {
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
            }
        };
    }
});

registerType(MprcompType);
module.exports = MprcompType;