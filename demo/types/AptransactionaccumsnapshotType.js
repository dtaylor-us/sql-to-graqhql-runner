var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AptransactionaccumsnapshotType = new GraphQLObjectType({
    name: 'Aptransactionaccumsnapshot',
    description: '@TODO DESCRIBE ME',

    fields: function getAptransactionaccumsnapshotFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            apTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            goalAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumulationAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumIndivInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            accumulationYtdAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planYearStartDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planYearEndDate: {
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

registerType(AptransactionaccumsnapshotType);
module.exports = AptransactionaccumsnapshotType;