var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SysSetFramwrkType = new GraphQLObjectType({
    name: 'SysSetFramwrk',
    description: '@TODO DESCRIBE ME',

    fields: function getSysSetFramwrkFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
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

            maxQueryResultCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            smtpServer: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            icd10CutoverDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            emailFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            logQueryThresholdSeconds: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            queryTimeoutSeconds: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            logSqlIndicator: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pingFederateConfigFileName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(SysSetFramwrkType);
module.exports = SysSetFramwrkType;