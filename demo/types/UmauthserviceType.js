var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var UmauthserviceType = new GraphQLObjectType({
    name: 'Umauthservice',
    description: '@TODO DESCRIBE ME',

    fields: function getUmauthserviceFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            umAuthProviderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            umAuthProvider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            umAuthId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            umAuthServiceType: {
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

            writtenCommunicationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cancelledServiceInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            clinicalProgramType: {
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

registerType(UmauthserviceType);
module.exports = UmauthserviceType;