var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SysfinsettingType = new GraphQLObjectType({
    name: 'Sysfinsetting',
    description: '@TODO DESCRIBE ME',

    fields: function getSysfinsettingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            memGroupContrFinAttribSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tagMemGroupContrBenCodeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            tagMemGroupContrInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            tagTransactionInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memReportingRetroPeriod: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memReportingDurationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContrTagHistPeriod: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContrTagDurationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payeeBankInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            payerBankInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memReportingDayOfMonth: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            financialTransactionReporting: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            disableRecoveryFunctionsInd: {
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

registerType(SysfinsettingType);
module.exports = SysfinsettingType;