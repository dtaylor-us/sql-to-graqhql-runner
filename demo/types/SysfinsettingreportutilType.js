var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SysfinsettingreportutilType = new GraphQLObjectType({
    name: 'Sysfinsettingreportutil',
    description: '@TODO DESCRIBE ME',

    fields: function getSysfinsettingreportutilFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            settingId: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            finUtilityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cirrusInitiatedProcessInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            utilityReportingMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            sourceFromPaymentFeedbackInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            paymentFeedbackMethod: {
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

registerType(SysfinsettingreportutilType);
module.exports = SysfinsettingreportutilType;