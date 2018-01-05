var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AccumlockauditdetailType = new GraphQLObjectType({
    name: 'Accumlockauditdetail',
    description: '@TODO DESCRIBE ME',

    fields: function getAccumlockauditdetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            lockOwnerMemberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lockOwnerMember: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            subscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            auditText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tableName: {
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
            }
        };
    }
});

registerType(AccumlockauditdetailType);
module.exports = AccumlockauditdetailType;