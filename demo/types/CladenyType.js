var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var CladenyType = new GraphQLObjectType({
    name: 'Cladeny',
    description: '@TODO DESCRIBE ME',

    fields: function getCladenyFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimLineAdjudicationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deniedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            denyReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            denyClassification: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            responsiblePartyType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deniedQty: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            editCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            denyFor: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            groupCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adjustmentReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            remittanceAdviceRemarkCode: {
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

registerType(CladenyType);
module.exports = CladenyType;