var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MsacontribdefType = new GraphQLObjectType({
    name: 'Msacontribdef',
    description: '@TODO DESCRIBE ME',

    fields: function getMsacontribdefFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            familyUnitScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maxContribType: {
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

            enableOverflowInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            overMaxBalInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            overMaxContribInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxBalanceType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carryoverMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            overflowMsaType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            varyMaxContribByMgInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            varyMaxBalanceByMgInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            varyCarryoverByMgInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            enableAccessPointInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            varyAccessPointByMgInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MsacontribdefType);
module.exports = MsacontribdefType;