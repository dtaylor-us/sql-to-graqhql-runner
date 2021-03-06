var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BenefitbundlecontrolplanbypassType = new GraphQLObjectType({
    name: 'Benefitbundlecontrolplanbypass',
    description: '@TODO DESCRIBE ME',

    fields: function getBenefitbundlecontrolplanbypassFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            benefitBundlePlanAccumId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleOptionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            controlPlanId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            controlBypassId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            riderPlanId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            riderBypassId: {
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

registerType(BenefitbundlecontrolplanbypassType);
module.exports = BenefitbundlecontrolplanbypassType;