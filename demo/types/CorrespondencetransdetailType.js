var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var CorrespondencetransdetailType = new GraphQLObjectType({
    name: 'Correspondencetransdetail',
    description: '@TODO DESCRIBE ME',

    fields: function getCorrespondencetransdetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            correspondenceId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            correspondence: {
                type: getType('Correspondence'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Correspondence')
            },

            correspondenceTransType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            correspondenceTransId: {
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

            changeDateTime: {
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

registerType(CorrespondencetransdetailType);
module.exports = CorrespondencetransdetailType;