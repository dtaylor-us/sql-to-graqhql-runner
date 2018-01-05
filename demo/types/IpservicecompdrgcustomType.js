var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var IpservicecompdrgcustomType = new GraphQLObjectType({
    name: 'Ipservicecompdrgcustom',
    description: '@TODO DESCRIBE ME',

    fields: function getIpservicecompdrgcustomFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            ipServiceCompDrgId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ipServiceCompDrg: {
                type: getType('Drg'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Drg')
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

            drgCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            wholeClaimReimbType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calculationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reimbDollarValue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reimbPercentValue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            greaterThanBilledInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allDaysInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dayFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dayThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            previousPeriodOverrideInd: {
                type: GraphQLInt,
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
            },

            notToExceedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(IpservicecompdrgcustomType);
module.exports = IpservicecompdrgcustomType;