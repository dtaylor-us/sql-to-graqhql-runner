var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimmedpolengineinputheaderType = new GraphQLObjectType({
    name: 'Claimmedpolengineinputheader',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimmedpolengineinputheaderFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            typeOfBill: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            principalDiagnosisCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            principalDiagCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            admitDiagnosisCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            admitDiagCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            statementFromDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            statementThruDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalBilledAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalAllowedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberResidenceState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mgContractSitusState: {
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

registerType(ClaimmedpolengineinputheaderType);
module.exports = ClaimmedpolengineinputheaderType;