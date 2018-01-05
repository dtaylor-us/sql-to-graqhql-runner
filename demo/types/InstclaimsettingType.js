var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var InstclaimsettingType = new GraphQLObjectType({
    name: 'Instclaimsetting',
    description: '@TODO DESCRIBE ME',

    fields: function getInstclaimsettingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            instAttachInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instCobPaymentsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instManualPricingInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instLine56Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instLine57Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instLine78Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instBlkBenDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instBlkAdmit: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instBlkCondCode: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instBlkOccurCode: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instBlkCorrCode: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instBlkValueCode: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instBlkPayerProv: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instBlkReleaseInfo: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instBlkPriorPay: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instBlkEstAmt: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instBlkCert: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instBlkTreatAuth: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instBlkEmpStat: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instBlkEmployer: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instBlkDiagCode: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instBlkProcCode: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instBlkPhysician: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instLine23: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instSalesTaxAmt: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instLine84: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instLine85: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instLine86: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instLine49Req: {
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

            instLine16: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instLine17: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instLine30AReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            instLine30BReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(InstclaimsettingType);
module.exports = InstclaimsettingType;