var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var UcrcompnoteType = new GraphQLObjectType({
    name: 'Ucrcompnote',
    description: '@TODO DESCRIBE ME',

    fields: function getUcrcompnoteFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            ucrCompVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            noteType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            noteSubject: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            noteText: {
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
            }
        };
    }
});

registerType(UcrcompnoteType);
module.exports = UcrcompnoteType;