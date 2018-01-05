var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var CorrespondenceentitydetailType = new GraphQLObjectType({
    name: 'Correspondenceentitydetail',
    description: '@TODO DESCRIBE ME',

    fields: function getCorrespondenceentitydetailFields() {
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

            correspondenceEntityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            correspondenceEntityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            correspondenceReviewedInd: {
                type: GraphQLInt,
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

registerType(CorrespondenceentitydetailType);
module.exports = CorrespondenceentitydetailType;