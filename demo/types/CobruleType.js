var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var CobruleType = new GraphQLObjectType({
    name: 'Cobrule',
    description: '@TODO DESCRIBE ME',

    fields: function getCobruleFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            cobRuleSetDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobPrimeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobSecondaryInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memberRuleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            birthdayRuleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            activeRuleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            noCobRuleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oopRuleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            reserveRuleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            medicaidRuleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            twentyEmplRuleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            hundredEmplRuleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            esrdRuleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            referenceGroup: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            shortNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            updatePermitted: {
                type: GraphQLInt,
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

registerType(CobruleType);
module.exports = CobruleType;