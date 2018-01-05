var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MsalevelType = new GraphQLObjectType({
    name: 'Msalevel',
    description: '@TODO DESCRIBE ME',

    fields: function getMsalevelFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            msaVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contribLevel: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            contribDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lengthEmplFromYears: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            lengthEmplFromMos: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            lengthEmplThruYears: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            lengthEmplThruMos: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            annSalaryFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            annSalaryThru: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allEmployStatusInd: {
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

            ageLimitFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitFromDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitFromLcd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitThruDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitThruLcd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            lengthEmplFromLcd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            lengthEmplThruLcd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            annSalaryLcd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MsalevelType);
module.exports = MsalevelType;