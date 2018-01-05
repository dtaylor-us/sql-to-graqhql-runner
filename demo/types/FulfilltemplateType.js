var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FulfilltemplateType = new GraphQLObjectType({
    name: 'Fulfilltemplate',
    description: '@TODO DESCRIBE ME',

    fields: function getFulfilltemplateFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            fulfillTemplateDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fulfillTemplateLongDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fulfillTemplateCategory: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fulfillTemplateExternalId: {
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

registerType(FulfilltemplateType);
module.exports = FulfilltemplateType;