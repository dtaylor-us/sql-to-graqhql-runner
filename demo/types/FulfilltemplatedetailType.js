var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FulfilltemplatedetailType = new GraphQLObjectType({
    name: 'Fulfilltemplatedetail',
    description: '@TODO DESCRIBE ME',

    fields: function getFulfilltemplatedetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            fulfillContentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fulfillTemplateId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            optionalInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            contentValue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createUserId: {
                type: GraphQLString,
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

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(FulfilltemplatedetailType);
module.exports = FulfilltemplatedetailType;