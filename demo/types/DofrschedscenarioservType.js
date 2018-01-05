var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var DofrschedscenarioservType = new GraphQLObjectType({
    name: 'Dofrschedscenarioserv',
    description: '@TODO DESCRIBE ME',

    fields: function getDofrschedscenarioservFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            dofrSchedEntityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dofrSchedScenarioId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servId: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            percentResp: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dofrSchedVersionId: {
                type: GraphQLString,
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

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(DofrschedscenarioservType);
module.exports = DofrschedscenarioservType;