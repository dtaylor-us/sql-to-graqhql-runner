var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProvidersettingType = new GraphQLObjectType({
    name: 'Providersetting',
    description: '@TODO DESCRIBE ME',

    fields: function getProvidersettingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            credStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recredCycle: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            onlineCredInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dataBankName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityCertOfficial: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityCertOffTitle: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            address1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            address2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            city: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            state: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postalCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            country: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phone1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            email: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityDbid: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            databankUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            databankPwd: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            agentDbid: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            creditCardNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            creditCardExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            useCodaInd: {
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
            },

            contractClaimRuleService: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defContractClaimRuleSet: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provSpecialtySetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            advanceTermNoticeDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimHistoryDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            priorLetterDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ProvidersettingType);
module.exports = ProvidersettingType;