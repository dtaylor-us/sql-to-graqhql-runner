var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var DrgType = new GraphQLObjectType({
    name: 'Drg',
    description: '@TODO DESCRIBE ME',

    fields: function getDrgFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            effectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expirationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finalRulePostAcutedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            finalRuleSpecialPayInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            medSurg: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            codeDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            codeDisplay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            drgRelativeWeight: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            geometricMeanLos: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            arithmeticMeanLos: {
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

registerType(DrgType);
module.exports = DrgType;