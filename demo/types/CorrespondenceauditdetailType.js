var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var CorrespondenceauditdetailType = new GraphQLObjectType({
    name: 'Correspondenceauditdetail',
    description: '@TODO DESCRIBE ME',

    fields: function getCorrespondenceauditdetailFields() {
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

            auditText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tableName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(CorrespondenceauditdetailType);
module.exports = CorrespondenceauditdetailType;