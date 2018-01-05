var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimtoothchartType = new GraphQLObjectType({
    name: 'Claimtoothchart',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimtoothchartFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            toothId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tooth: {
                type: getType('Tooth'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Tooth')
            },

            claimLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            idCodeQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimToothStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            toothSurface1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            toothSurface2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            toothSurface3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            toothSurface4: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            toothSurface5: {
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

registerType(ClaimtoothchartType);
module.exports = ClaimtoothchartType;