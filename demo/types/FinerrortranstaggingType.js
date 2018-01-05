var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FinerrortranstaggingType = new GraphQLObjectType({
    name: 'Finerrortranstagging',
    description: '@TODO DESCRIBE ME',

    fields: function getFinerrortranstaggingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            apTransactionDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionInterestId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionSurchargeId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finAttribSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finAttribSchedSegmentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finAttribSchedSegmentDefId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finAttribSchedVariableId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finAttribSchedVariableDefId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ruleServiceName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ruleSetName: {
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

registerType(FinerrortranstaggingType);
module.exports = FinerrortranstaggingType;