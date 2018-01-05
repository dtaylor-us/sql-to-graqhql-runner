var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemgroupcontractoptinsruleType = new GraphQLObjectType({
    name: 'Memgroupcontractoptinsrule',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgroupcontractoptinsruleFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractOptId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            guardrailScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            newHireGuardInsRuleWaitPrdId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            overrideMaxStudentAge: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            overrideMaxMilitaryDepAge: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            overrideRetroAddInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            terminationExpirationDateType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            depTermExpirationDateType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            studentTermExpirationDateType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            overrideRetroTermInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            retroTermDayTolerance: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            retroAddDayTolerance: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            overrideRetroBenefitChangeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            retroBenefitChangeDayTolerance: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeElectionSameProductInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            addAdditionalCoverageInd: {
                type: GraphQLInt,
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

            waiveRehiredWithinType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveRehiredWithinDayCount: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveRehiredWithinMonthCount: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveNewHireInOpenEnrollInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            overrideMandatoryCoverageDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveRehiredIndefiniteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            nonStandardWaitingPeriodInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            nonStandardWaitingPeriodText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waitingPeriodDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemgroupcontractoptinsruleType);
module.exports = MemgroupcontractoptinsruleType;