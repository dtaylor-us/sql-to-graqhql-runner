var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var CarriernotedetailType = new GraphQLObjectType({
    name: 'Carriernotedetail',
    description: '@TODO DESCRIBE ME',

    fields: function getCarriernotedetailFields() {
        return {
            carrierId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrier: {
                type: getType('Carrier'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Carrier')
            },

            noteId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            noteText: {
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

            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(CarriernotedetailType);
module.exports = CarriernotedetailType;