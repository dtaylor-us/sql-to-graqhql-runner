var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProvideradverseactionType = new GraphQLObjectType({
    name: 'Provideradverseaction',
    description: '@TODO DESCRIBE ME',

    fields: function getProvideradverseactionFields() {
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

            agencyName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            penaltyAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            actionDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            actionDate2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            actionTimeframe: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            actionYears: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            actionMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            actionDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            autoReinstateInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            conductInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            appealDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adverseCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adverseCodeDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adverseCode2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adverseCodeDesc2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adverseCode3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adverseCodeDesc3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adverseCode4: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adverseCodeDesc4: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adverseCode5: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adverseCodeDesc5: {
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

registerType(ProvideradverseactionType);
module.exports = ProvideradverseactionType;