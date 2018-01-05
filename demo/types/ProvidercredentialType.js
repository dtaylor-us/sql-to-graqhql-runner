var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProvidercredentialType = new GraphQLObjectType({
    name: 'Providercredential',
    description: '@TODO DESCRIBE ME',

    fields: function getProvidercredentialFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            providerId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            credStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            credStartDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            credFinishDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recredentialDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            inProcInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            inProcDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            completedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            completionDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            appealInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            appealDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            appealDecision: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reviewInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            reviewDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reviewDecision: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            shortNote: {
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

            state: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            overrideCredStatus: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            lobEntityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ProvidercredentialType);
module.exports = ProvidercredentialType;