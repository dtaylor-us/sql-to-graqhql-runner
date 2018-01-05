var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemberincentarType = new GraphQLObjectType({
    name: 'Memberincentar',
    description: '@TODO DESCRIBE ME',

    fields: function getMemberincentarFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memberIncentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberIncent: {
                type: getType('Incent'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Incent')
            },

            memberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            member: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            incentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            incent: {
                type: getType('Incent'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Incent')
            },

            arTransactionId: {
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

registerType(MemberincentarType);
module.exports = MemberincentarType;