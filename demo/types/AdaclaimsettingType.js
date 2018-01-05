var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AdaclaimsettingType = new GraphQLObjectType({
    name: 'Adaclaimsetting',
    description: '@TODO DESCRIBE ME',

    fields: function getAdaclaimsettingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            adaAttachInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaCobPaymentsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaManualPricingInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaLine1BReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaPatientAddReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaLine18AReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaLine18BReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaLine20Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaLine21Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaSubAddReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaReleaseDefReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaLine40BReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaBillingDentist: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaLine47Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaLine48Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaLine49Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaTypeOfInjuryReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaLine60Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaTreatingProvReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaProviderSigDate: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adaBeneAssignDate: {
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
            }
        };
    }
});

registerType(AdaclaimsettingType);
module.exports = AdaclaimsettingType;