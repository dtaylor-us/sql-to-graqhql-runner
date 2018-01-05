var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimmedpolicyengineinputlineType = new GraphQLObjectType({
    name: 'Claimmedpolicyengineinputline',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimmedpolicyengineinputlineFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimMedPolEngineInputHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimLineNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            contractMedPolicySchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planMedPolicySchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authFoundInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            multipleAuthFoundInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            umAuthId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveAuthReqEocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            eocInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            posCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            revenueCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            taxonomyCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dateOfServiceFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dateOfServiceThru: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            providerPracticeState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allowedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitCodeCurrentClaim: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitCodeTriggerClaim: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            authFoundTriggerClaimInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            profDiagnosisCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            profDiagCodeType: {
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

registerType(ClaimmedpolicyengineinputlineType);
module.exports = ClaimmedpolicyengineinputlineType;