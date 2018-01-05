var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SystemgeneralsettingType = new GraphQLObjectType({
    name: 'Systemgeneralsetting',
    description: '@TODO DESCRIBE ME',

    fields: function getSystemgeneralsettingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            country: {
                type: GraphQLString,
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

            emailTo: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postAdjSummChkProc: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            lockWaitTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            lockMaxAttempts: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimEditSetting: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            jobFailEmails: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dashboardEmailAddr: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            batchWorkingPath: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            restartFailPoints: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            enableApClmRepostInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            productAdjudScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mgAdjudScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eocSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            applicationInstanceId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberRecipientDefaultAgeYears: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memberRecipientDefaultAgeMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            serviceSettingRuleServiceName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defServiceSettingRuleSetName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            opfAsOp: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            currency: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bedDayScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planYearBuildAheadMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            defaultCovLevelCode: {
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

            accumLockDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accumLockDtQty: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(SystemgeneralsettingType);
module.exports = SystemgeneralsettingType;