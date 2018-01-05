var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemexpensecodemaxhxType = new GraphQLObjectType({
    name: 'Memexpensecodemaxhx',
    description: '@TODO DESCRIBE ME',

    fields: function getMemexpensecodemaxhxFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memExpenseCodeMaxId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            member: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
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

            expenseCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expenseCodeSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            famMemberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            famMember: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            claimLineAdjudicationId: {
                type: GraphQLString,
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

            maxAccumAmt: {
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

registerType(MemexpensecodemaxhxType);
module.exports = MemexpensecodemaxhxType;