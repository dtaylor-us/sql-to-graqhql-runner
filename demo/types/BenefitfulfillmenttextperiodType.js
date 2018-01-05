var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BenefitfulfillmenttextperiodType = new GraphQLObjectType({
    name: 'Benefitfulfillmenttextperiod',
    description: '@TODO DESCRIBE ME',

    fields: function getBenefitfulfillmenttextperiodFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
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

            overviewText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fulfillmentText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            languageCodeIso: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allFulfillmentTypeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            benefitFulfillmentTextId: {
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

registerType(BenefitfulfillmenttextperiodType);
module.exports = BenefitfulfillmenttextperiodType;