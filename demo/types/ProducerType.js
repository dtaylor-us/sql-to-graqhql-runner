var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProducerType = new GraphQLObjectType({
    name: 'Producer',
    description: '@TODO DESCRIBE ME',

    fields: function getProducerFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            producerTin: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            producerType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            producerStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameLast: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameFirst: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameMiddle: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameSalutation: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameSuffix: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameSuffixTitle: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            organizationName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            jobTitle: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            doNotAssignInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            createUserId: {
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

            changeUserId: {
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

registerType(ProducerType);
module.exports = ProducerType;