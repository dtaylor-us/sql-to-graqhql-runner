var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProvidersanctionType = new GraphQLObjectType({
    name: 'Providersanction',
    description: '@TODO DESCRIBE ME',

    fields: function getProvidersanctionFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            providerId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            sanctionDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sanctionState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sanctionSourceType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            receivedDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            boardType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            boardActionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            boardReviewDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lossOfLicenseInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            sanctionReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sanctionTerm: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sanctionCondition: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sanctionFine: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sanctionCost: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sanctionComment: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sanctionReinstateDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sanctionReinstateComment: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sanctionFollowUpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sanctionFollowUpComment: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sanctionFollowUpCompleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            originalSourceSystemId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalSourceSystemType: {
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

registerType(ProvidersanctionType);
module.exports = ProvidersanctionType;