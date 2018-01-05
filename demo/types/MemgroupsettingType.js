var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemgroupsettingType = new GraphQLObjectType({
    name: 'Memgroupsetting',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgroupsettingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            inheritParentContractsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            adjudScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            remarkCodeScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            writtenAssuranceType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            atpDesignationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            erisaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            erisaCategoryType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            religiousExemptionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            effectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expirationDate: {
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

            inboundMemberEnrollMethodType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billingPrefAssignmentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberIdentifierPreferenceType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            generateReportingExtractInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            sizeDefinitionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            timelyFilingSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dualPlanExclusion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobAttestationFrequency: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobAttestationFreqDuration: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobAttestationDenyGracePeriod: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobAttestationDenyGracePeriodDuration: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobThresholdAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemgroupsettingType);
module.exports = MemgroupsettingType;