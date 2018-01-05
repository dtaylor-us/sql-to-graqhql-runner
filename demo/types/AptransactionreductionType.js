var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AptransactionreductionType = new GraphQLObjectType({
    name: 'Aptransactionreduction',
    description: '@TODO DESCRIBE ME',

    fields: function getAptransactionreductionFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            apTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            reductionReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reductionAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stateTypeCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stateCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            interestPercentage: {
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

registerType(AptransactionreductionType);
module.exports = AptransactionreductionType;