var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BenefitbundleplanaccumType = new GraphQLObjectType({
    name: 'Benefitbundleplanaccum',
    description: '@TODO DESCRIBE ME',

    fields: function getBenefitbundleplanaccumFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
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

            bundleAccumEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bundleAccumExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            shareCobReserveInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            shareReinsAccumInd: {
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

registerType(BenefitbundleplanaccumType);
module.exports = BenefitbundleplanaccumType;