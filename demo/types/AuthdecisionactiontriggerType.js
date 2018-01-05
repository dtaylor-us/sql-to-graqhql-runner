var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AuthdecisionactiontriggerType = new GraphQLObjectType({
    name: 'Authdecisionactiontrigger',
    description: '@TODO DESCRIBE ME',

    fields: function getAuthdecisionactiontriggerFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            authDecisionActionScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authDecisionActionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authDecisionCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceSettingType: {
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
            },

            liabilityDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            preCommunicationDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postCommunicationDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AuthdecisionactiontriggerType);
module.exports = AuthdecisionactiontriggerType;