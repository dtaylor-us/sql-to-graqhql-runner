var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BenefitbundleccoopplanType = new GraphQLObjectType({
    name: 'Benefitbundleccoopplan',
    description: '@TODO DESCRIBE ME',

    fields: function getBenefitbundleccoopplanFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleCcoopGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bundleCrossControlAccumId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundlePlanId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleOptionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stoplossOopid: {
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

registerType(BenefitbundleccoopplanType);
module.exports = BenefitbundleccoopplanType;