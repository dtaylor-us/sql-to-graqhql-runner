var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProtechsplitcompType = new GraphQLObjectType({
    name: 'Protechsplitcomp',
    description: '@TODO DESCRIBE ME',

    fields: function getProtechsplitcompFields() {
        return {
            proTechSplitCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            proTechSplitDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ownerGroupId: {
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

            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            proTechSplitCompVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            proTechSplitCompStatus: {
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
            }
        };
    }
});

registerType(ProtechsplitcompType);
module.exports = ProtechsplitcompType;