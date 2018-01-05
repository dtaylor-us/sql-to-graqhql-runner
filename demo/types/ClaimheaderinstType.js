var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimheaderinstType = new GraphQLObjectType({
    name: 'Claimheaderinst',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimheaderinstFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            typeOfBill: {
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

            admissionDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            admissionHour: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            admissionTypeCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            admissionSourceCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dischargeHour: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            patientStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            drgCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ppsCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coveredDays: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            peerReviewAuthNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            inpatientInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimAuthServiceSettingType: {
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

registerType(ClaimheaderinstType);
module.exports = ClaimheaderinstType;