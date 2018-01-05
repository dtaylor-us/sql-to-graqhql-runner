var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FulfillrequestType = new GraphQLObjectType({
    name: 'Fulfillrequest',
    description: '@TODO DESCRIBE ME',

    fields: function getFulfillrequestFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            fulfillEventId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fulfillEventName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fulfillMaterialType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fulfillTemplateId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fulfillDocumentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fulfillRequestStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            languageCodeNiso: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            resendInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            origFulfillRequestLogId: {
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

registerType(FulfillrequestType);
module.exports = FulfillrequestType;