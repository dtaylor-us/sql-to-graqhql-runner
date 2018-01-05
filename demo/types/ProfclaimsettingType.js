var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProfclaimsettingType = new GraphQLObjectType({
    name: 'Profclaimsetting',
    description: '@TODO DESCRIBE ME',

    fields: function getProfclaimsettingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            cmsAttachInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsCobPaymentsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsManualPricingInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine1Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine5Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine7Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine8MarReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine8EmpReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine10AReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine10BReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine10CReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine13Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine14Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine15Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine16FromReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine16ThruReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine17Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine18Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine20LabReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine22Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine23Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine24CReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine24HReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine24IReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine24JReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine26Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine27Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine31Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine32Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine10DReq: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine19Req: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cmsLine24KReq: {
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

registerType(ProfclaimsettingType);
module.exports = ProfclaimsettingType;