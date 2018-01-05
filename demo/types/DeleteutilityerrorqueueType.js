var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var DeleteutilityerrorqueueType = new GraphQLObjectType({
    name: 'Deleteutilityerrorqueue',
    description: '@TODO DESCRIBE ME',

    fields: function getDeleteutilityerrorqueueFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tableName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            errorMessage: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            runDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            keepMemberDataInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            keepContractDataInd: {
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

            requestStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lockUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lockDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            descriptionText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            errorCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            requestDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            requestNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            requestReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(DeleteutilityerrorqueueType);
module.exports = DeleteutilityerrorqueueType;