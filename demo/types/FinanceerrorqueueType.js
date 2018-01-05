var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var FinanceerrorqueueType = new GraphQLObjectType({
    name: 'Financeerrorqueue',
    description: '@TODO DESCRIBE ME',

    fields: function getFinanceerrorqueueFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            processDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            requestDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            requestStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            requestReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lockUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lockDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            requestNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            processNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            errorCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            runDate: {
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

            arTransactionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            apTransactionId: {
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

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subPayrollFrequencyId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            applyToPlanYear: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupPayrollId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupPayrollDateId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(FinanceerrorqueueType);
module.exports = FinanceerrorqueueType;