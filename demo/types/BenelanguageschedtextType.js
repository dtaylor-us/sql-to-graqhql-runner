var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BenelanguageschedtextType = new GraphQLObjectType({
    name: 'Benelanguageschedtext',
    description: '@TODO DESCRIBE ME',

    fields: function getBenelanguageschedtextFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            benefitCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerDesignation: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitFromDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitThruDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitFromLcd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitThruLcd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            benCodeCoverage: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tierNumber: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            codeLevel: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            networkId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            network: {
                type: getType('Network'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Network')
            },

            overviewText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            beneLanguageText: {
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

            doNotAssignInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            assignedInd: {
                type: GraphQLInt,
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

registerType(BenelanguageschedtextType);
module.exports = BenelanguageschedtextType;