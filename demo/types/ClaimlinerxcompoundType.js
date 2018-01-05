var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimlinerxcompoundType = new GraphQLObjectType({
    name: 'Claimlinerxcompound',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimlinerxcompoundFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            rxCompDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxAdminRoute: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxCompDoseForm: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxCompProdId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxCompProdIdQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxCompQtyDisp: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxCompQtyDispType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxCompCost: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxCompCostBasis: {
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

registerType(ClaimlinerxcompoundType);
module.exports = ClaimlinerxcompoundType;