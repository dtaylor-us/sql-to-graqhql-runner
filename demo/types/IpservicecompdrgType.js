var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var IpservicecompdrgType = new GraphQLObjectType({
    name: 'Ipservicecompdrg',
    description: '@TODO DESCRIBE ME',

    fields: function getIpservicecompdrgFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            ipServiceCompVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            manualReviewInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            specialProcessingInst: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingServiceCategory: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medSurg: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            customDrgInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            passThruCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            excludeFromOutlierInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            greaterThanBilledInd: {
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

            deleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            shortStayWholeClaimReimbType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            shortStayReimbDollarValue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            shortStayDayFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            shortStayDayThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            baseRateWholeClaimReimbType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            baseRateReimbDollarValue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            drgMeanLosType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            baseRatePlusDays: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            baseRateAllDaysInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            baseRateDayFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            baseRateDayThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            addtlDayWholeClaimReimbType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            addtlDayReimbDollarValue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(IpservicecompdrgType);
module.exports = IpservicecompdrgType;