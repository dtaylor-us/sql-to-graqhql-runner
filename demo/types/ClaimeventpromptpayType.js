var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimeventpromptpayType = new GraphQLObjectType({
    name: 'Claimeventpromptpay',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimeventpromptpayFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimEventId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            promptPayType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            state: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            promptPayDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            interestScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            promptPaySchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            promptPaySchedDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            includePaymentDeliveryTimeInd: {
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
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimeventpromptpayType);
module.exports = ClaimeventpromptpayType;