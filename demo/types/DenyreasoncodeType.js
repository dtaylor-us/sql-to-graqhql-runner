var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var DenyreasoncodeType = new GraphQLObjectType({
    name: 'Denyreasoncode',
    description: '@TODO DESCRIBE ME',

    fields: function getDenyreasoncodeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            drcCodeDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            drcCodeDisplay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defaultRespPartyType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            innRespPartyType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonRespPartyType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defaultGroupCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            innGroupCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonGroupCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defaultAdjustmentReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defaultRemittanceAdviceRemarkCode: {
                type: GraphQLString,
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

            innAdjustmentReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonAdjustmentReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            innRemittanceAdviceRemarkCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oonRemittanceAdviceRemarkCode: {
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

registerType(DenyreasoncodeType);
module.exports = DenyreasoncodeType;