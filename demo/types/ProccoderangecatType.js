var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProccoderangecatType = new GraphQLObjectType({
    name: 'Proccoderangecat',
    description: '@TODO DESCRIBE ME',

    fields: function getProccoderangecatFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            procCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procCodeFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procCodeThru: {
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

registerType(ProccoderangecatType);
module.exports = ProccoderangecatType;