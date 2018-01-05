var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimheaderprofType = new GraphQLObjectType({
    name: 'Claimheaderprof',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimheaderprofFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            onsetDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lastWorkedDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            returnToWorkDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            admissionDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dischargeDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            referringProvId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            outsideLab: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            providerSignatureInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            providerSigDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalMbrAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimTaxIdType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billingProvId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            addtlBillingProvId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            onsetDateQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            patientSignatureSourceCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            firstTreatmentDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lastSeenDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            acuteManifestationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lastMenstrualDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lastXrayDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            hearingVisionRxDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memDisabilityStartDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memDisabilityEndDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            assumedReportStartDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            assumedReportEndDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            propertyAndCasualtyInitialDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mammographyCertificationNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carePlanOversightNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            chiroPatientConditionCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            chiroPatientConditionDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            chiroPatientConditionAddlDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medicareCrossoverCode: {
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

registerType(ClaimheaderprofType);
module.exports = ClaimheaderprofType;