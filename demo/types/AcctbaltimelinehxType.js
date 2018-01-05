var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AcctbaltimelinehxType = new GraphQLObjectType({
    name: 'Acctbaltimelinehx',
    description: '@TODO DESCRIBE ME',

    fields: function getAcctbaltimelinehxFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            timelineEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            timelineExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            currentBalanceAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            timelineReductInd: {
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

registerType(AcctbaltimelinehxType);
module.exports = AcctbaltimelinehxType;