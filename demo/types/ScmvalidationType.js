var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ScmvalidationType = new GraphQLObjectType({
    name: 'Scmvalidation',
    description: '@TODO DESCRIBE ME',

    fields: function getScmvalidationFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            scmId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            scm: {
                type: getType('Scm'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Scm')
            },

            noteText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            scmValMessageType: {
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

registerType(ScmvalidationType);
module.exports = ScmvalidationType;