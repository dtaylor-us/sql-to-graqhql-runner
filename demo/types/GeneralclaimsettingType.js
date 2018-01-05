var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var GeneralclaimsettingType = new GraphQLObjectType({
    name: 'Generalclaimsetting',
    description: '@TODO DESCRIBE ME',

    fields: function getGeneralclaimsettingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            bgDiffExpCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pbmCancelCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pbmAdjustReasonCd: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            icd9CutOffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            icd10FirstUseDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            promptPayInterestRule: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            enableProvQueueAttachInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            icnBlockSize: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            providerOrgGroupModifier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            promptPaySchedId: {
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

registerType(GeneralclaimsettingType);
module.exports = GeneralclaimsettingType;