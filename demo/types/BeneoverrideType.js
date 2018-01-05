var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BeneoverrideType = new GraphQLObjectType({
    name: 'Beneoverride',
    description: '@TODO DESCRIBE ME',

    fields: function getBeneoverrideFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            benCodeCoverage: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coverAsBenefitCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coverAsBenefitTier: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            coverAsCodeLevel: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            coverAsVersion: {
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

registerType(BeneoverrideType);
module.exports = BeneoverrideType;