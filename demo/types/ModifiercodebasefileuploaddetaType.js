var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ModifiercodebasefileuploaddetaType = new GraphQLObjectType({
    name: 'Modifiercodebasefileuploaddeta',
    description: '@TODO DESCRIBE ME',

    fields: function getModifiercodebasefileuploaddetaFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            modifierCodeBaseFileUploadHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierLongDesc: {
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

registerType(ModifiercodebasefileuploaddetaType);
module.exports = ModifiercodebasefileuploaddetaType;