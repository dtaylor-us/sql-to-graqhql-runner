var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimcobmedicareType = new GraphQLObjectType({
    name: 'Claimcobmedicare',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimcobmedicareFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            claimId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimCobOtherSubscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medicareClaimType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reimbursementRate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            hcpcsPayableAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentRemarkCode1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentRemarkCode2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentRemarkCode3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentRemarkCode4: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentRemarkCode5: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            esrdPaymentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nonpayableProfBilledAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coveredDaysCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            lifetimePsychDaysCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            drgAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            disproportionShareAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mspPassthruAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ppsCapitalAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ppsCapitalFspdrgAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ppsCapitalHspdrgAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ppsCapitalDshdrgAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oldCapitalAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ppsCapitalImeAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ppsOperatingHospDrgAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            costReportDayCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ppsOperatingFedDrgAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ppsCapitalOutlierAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            indirectTeachingAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ppsCapitalExceptionAmt: {
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

registerType(ClaimcobmedicareType);
module.exports = ClaimcobmedicareType;