var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BillingschedmodifierType = new GraphQLObjectType({
    name: 'Billingschedmodifier',
    description: '@TODO DESCRIBE ME',

    fields: function getBillingschedmodifierFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            billingSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            industryClassModSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billingModifierDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierCategory: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            premModifierType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            indicatorCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            disabilityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierValue: {
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
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(BillingschedmodifierType);
module.exports = BillingschedmodifierType;