var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var UmreferralserviceType = new GraphQLObjectType({
    name: 'Umreferralservice',
    description: '@TODO DESCRIBE ME',

    fields: function getUmreferralserviceFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            umReferralProviderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            umReferralProvider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            umReferralId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceSequenceNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceReferenceNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureOtherText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cancelledServiceInd: {
                type: GraphQLInt,
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

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
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

registerType(UmreferralserviceType);
module.exports = UmreferralserviceType;