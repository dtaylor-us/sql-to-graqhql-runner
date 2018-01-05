var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var LogoType = new GraphQLObjectType({
    name: 'Logo',
    description: '@TODO DESCRIBE ME',

    fields: function getLogoFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            logoCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            doNotUseInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            logoDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalLogoId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalLogo: {
                type: getType('Logo'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Logo')
            },

            longDesc: {
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

registerType(LogoType);
module.exports = LogoType;