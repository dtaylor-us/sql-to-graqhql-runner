var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimenvelopeType = new GraphQLObjectType({
    name: 'Claimenvelope',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimenvelopeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimEnvelopeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            clearinghouseClaimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerTin: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            patientAcctNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimFrequencyCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalClaimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fln: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            inboundTransId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            outboundTransId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originatorAppTransId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payerOriginalControlNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dcnId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            networkTraceNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            submitterTraceNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processingType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            envelopeStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            manualOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            originalReceiptDate: {
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

registerType(ClaimenvelopeType);
module.exports = ClaimenvelopeType;