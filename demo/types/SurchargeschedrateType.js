var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SurchargeschedrateType = new GraphQLObjectType({
    name: 'Surchargeschedrate',
    description: '@TODO DESCRIBE ME',

    fields: function getSurchargeschedrateFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            surchargeSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            surchargeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            surchargeRate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            surchargeRateNonElecting: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            surchargePayeeType: {
                type: GraphQLString,
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

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(SurchargeschedrateType);
module.exports = SurchargeschedrateType;