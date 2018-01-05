var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var UmreferralprovideraltidType = new GraphQLObjectType({
    name: 'Umreferralprovideraltid',
    description: '@TODO DESCRIBE ME',

    fields: function getUmreferralprovideraltidFields() {
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

            providerIdText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            referenceIdQual: {
                type: GraphQLString,
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

registerType(UmreferralprovideraltidType);
module.exports = UmreferralprovideraltidType;