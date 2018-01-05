var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AptransactionattribtagType = new GraphQLObjectType({
    name: 'Aptransactionattribtag',
    description: '@TODO DESCRIBE ME',

    fields: function getAptransactionattribtagFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            apTransactionAttribSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            segmentNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            segmentName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            segmentValue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finAttribSchedSegmentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ruleSetName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ledgerEntryType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            invalidInd: {
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

registerType(AptransactionattribtagType);
module.exports = AptransactionattribtagType;