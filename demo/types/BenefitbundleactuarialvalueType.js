var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BenefitbundleactuarialvalueType = new GraphQLObjectType({
    name: 'Benefitbundleactuarialvalue',
    description: '@TODO DESCRIBE ME',

    fields: function getBenefitbundleactuarialvalueFields() {
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

            actuarialValueEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            actuarialValueExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            minActuarialValuePct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxActuarialValuePct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            minEmployerContribAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxEmployerContribAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            metallicLevel: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            variant: {
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

registerType(BenefitbundleactuarialvalueType);
module.exports = BenefitbundleactuarialvalueType;