var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AcctbalfamacsclaimhxType = new GraphQLObjectType({
    name: 'Acctbalfamacsclaimhx',
    description: '@TODO DESCRIBE ME',

    fields: function getAcctbalfamacsclaimhxFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            applyDedAccessAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            applyOopAccessAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimDateTime: {
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

            acsClaimType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimDedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ytdDedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            acsPointReached: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            originalReceiptDate: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AcctbalfamacsclaimhxType);
module.exports = AcctbalfamacsclaimhxType;