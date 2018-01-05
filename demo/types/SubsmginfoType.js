var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SubsmginfoType = new GraphQLObjectType({
    name: 'Subsmginfo',
    description: '@TODO DESCRIBE ME',

    fields: function getSubsmginfoFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            subscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subsAffiliationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            origEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorCovMonths: {
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

            vestedInd: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mgCustom01: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mgCustom02: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mgCustom03: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mgCustom04: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mgCustom05: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mgCustom06: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mgCustom07: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mgCustom08: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mgCustom09: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mgCustom10: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stmtTypeOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            statementType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(SubsmginfoType);
module.exports = SubsmginfoType;