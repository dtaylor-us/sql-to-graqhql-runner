var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AcctbalType = new GraphQLObjectType({
    name: 'Acctbal',
    description: '@TODO DESCRIBE ME',

    fields: function getAcctbalFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
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

            benPeriodStartDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benPeriodEndDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            graceExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            currentBalanceAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carryoverAmtPotent: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carryoverAmtUsed: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carryoverFusid: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carryoverFamilyLevel: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            carryoverContrLevel: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            prefundAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prefundAmtUsed: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prefundAmtRecovered: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            linkToAcctBalSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            linkToAcctBalSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            linkToAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            linkFrmAcctBalSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            linkFrmAcctBalSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            linkFrmAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            linkFrmAmtUsed: {
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
            },

            purseId: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            forfeitureDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carryoverSent: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cacCaryoverGraceSent: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cacCarryoverAmtSent: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prefundAmtRemaining: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            archiveInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            archiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            valueLoadDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            valueLoadAmount: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            invalidatedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dateInvalidated: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            caremarkId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cacCarryoverPotent: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AcctbalType);
module.exports = AcctbalType;