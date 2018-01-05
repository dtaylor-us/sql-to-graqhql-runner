var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProducerphoneType = new GraphQLObjectType({
    name: 'Producerphone',
    description: '@TODO DESCRIBE ME',

    fields: function getProducerphoneFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            producerId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            producer: {
                type: getType('Producer'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Producer')
            },

            phoneInternationalInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            primaryInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            phoneType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phoneExt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phoneNum: {
                type: GraphQLString,
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

registerType(ProducerphoneType);
module.exports = ProducerphoneType;