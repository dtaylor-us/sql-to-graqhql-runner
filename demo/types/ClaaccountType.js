var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaaccountType = new GraphQLObjectType({
    name: 'Claaccount',
    description: '@TODO DESCRIBE ME',

    fields: function getClaaccountFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memberAccountId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msa: {
                type: getType('Msa'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Msa')
            },

            msaType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            orderAcctSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            fundHoldAmount: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fundHoldReductAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            fundHoldRunoutDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            graceInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dedPostBackInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oopPostBackInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            collectionSendDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            startingMemRespAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claNetPayAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prevPayableAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claMemRespAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planMemRespAmt: {
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

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
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

registerType(ClaaccountType);
module.exports = ClaaccountType;