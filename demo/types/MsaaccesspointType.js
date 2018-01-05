var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MsaaccesspointType = new GraphQLObjectType({
    name: 'Msaaccesspoint',
    description: '@TODO DESCRIBE ME',

    fields: function getMsaaccesspointFields() {
        return {
            msaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msa: {
                type: getType('Msa'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Msa')
            },

            carryoverInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            parStatusInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            acsPtAccumType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            indAcsPtType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            famAcsPtType: {
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

            addInOutNetYtdInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            famAcsPtAccumType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accessPtSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            accessPtEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accessPtExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msaVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MsaaccesspointType);
module.exports = MsaaccesspointType;