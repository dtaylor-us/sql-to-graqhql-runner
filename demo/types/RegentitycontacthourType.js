var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var RegentitycontacthourType = new GraphQLObjectType({
    name: 'Regentitycontacthour',
    description: '@TODO DESCRIBE ME',

    fields: function getRegentitycontacthourFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            regEntityContactId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            regEntityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            hoursType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dayOfWeek: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contactFromTime: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contactThruTime: {
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

registerType(RegentitycontacthourType);
module.exports = RegentitycontacthourType;