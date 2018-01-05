var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MsaincentcreditType = new GraphQLObjectType({
    name: 'Msaincentcredit',
    description: '@TODO DESCRIBE ME',

    fields: function getMsaincentcreditFields() {
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

            incentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            incent: {
                type: getType('Incent'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Incent')
            },

            sequenceNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            effDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            incentCreditAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            restrictRelInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            relationshipCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            incentFreq: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            restrictCreditInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            daysAfterEnroll: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            daysAfterPlanYear: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            employStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            prorationType: {
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

registerType(MsaincentcreditType);
module.exports = MsaincentcreditType;