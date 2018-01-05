var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProvidercertificationType = new GraphQLObjectType({
    name: 'Providercertification',
    description: '@TODO DESCRIBE ME',

    fields: function getProvidercertificationFields() {
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

            boardCertification: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            boardCertStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            certificationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            boardCertEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            boardCertExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            renewalDate: {
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

registerType(ProvidercertificationType);
module.exports = ProvidercertificationType;