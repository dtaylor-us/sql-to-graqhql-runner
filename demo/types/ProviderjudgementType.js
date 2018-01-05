var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProviderjudgementType = new GraphQLObjectType({
    name: 'Providerjudgement',
    description: '@TODO DESCRIBE ME',

    fields: function getProviderjudgementFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            providerId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            databankControlNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reportCreateDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reportChangeDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            courtName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            venueType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            city: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postalCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            courtFileNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            plaintiff: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            caseNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            judgmentActionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            judgmentDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            restitutionAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            judgmentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            incarcYears: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            incarcMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            incarcDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            suspendYears: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            suspendMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            suspendDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            homeDentYears: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            homeDentMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            homeDentDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            probationYears: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            probationMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            probationDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            hoursCommSvc: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            otherJudgment: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            appealDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            noteText: {
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

registerType(ProviderjudgementType);
module.exports = ProviderjudgementType;