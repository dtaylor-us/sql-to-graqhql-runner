var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProductbenefitType = new GraphQLObjectType({
    name: 'Productbenefit',
    description: '@TODO DESCRIBE ME',

    fields: function getProductbenefitFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            groupIndivType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            exchangeOnlyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            requireReinsuranceInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            riderSetting: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fundingSource: {
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
            },

            pcpTieringInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            specialistTieringInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            hospitalTieringInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            placeOfServiceTieringInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            customTieringInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pcpSelectionRequiredInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            gatedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oonCoveredInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            planType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            usePcPratesInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ProductbenefitType);
module.exports = ProductbenefitType;