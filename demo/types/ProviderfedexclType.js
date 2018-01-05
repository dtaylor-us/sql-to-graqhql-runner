var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProviderfedexclType = new GraphQLObjectType({
    name: 'Providerfedexcl',
    description: '@TODO DESCRIBE ME',

    fields: function getProviderfedexclFields() {
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

            databankControlNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reportCreateDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reportChangeDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reportRunDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            taxonomyName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mmerAction: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mmerReportStatus: {
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
            }
        };
    }
});

registerType(ProviderfedexclType);
module.exports = ProviderfedexclType;