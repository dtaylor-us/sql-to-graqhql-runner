var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ApccodedetailType = new GraphQLObjectType({
    name: 'Apccodedetail',
    description: '@TODO DESCRIBE ME',

    fields: function getApccodedetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            apcStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            relativeWeight: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apcPayment: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apcUnadjCopay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            minAdjustedCopay: {
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

registerType(ApccodedetailType);
module.exports = ApccodedetailType;