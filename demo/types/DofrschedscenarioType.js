var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var DofrschedscenarioType = new GraphQLObjectType({
    name: 'Dofrschedscenario',
    description: '@TODO DESCRIBE ME',

    fields: function getDofrschedscenarioFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            scenarioDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allParStatusTypeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            parStatusType: {
                type: GraphQLString,
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

            defaultDofrSchedEntityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dofrSchedVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(DofrschedscenarioType);
module.exports = DofrschedscenarioType;