var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AdjudschedsettingssystemType = new GraphQLObjectType({
    name: 'Adjudschedsettingssystem',
    description: '@TODO DESCRIBE ME',

    fields: function getAdjudschedsettingssystemFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
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

            claimAuditSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimEntryBilledAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimEntryLineBilledAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimEntryPct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            orthonetClaimAuditSchedRuleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            orthonetClaimAuditSchedRule: {
                type: getType('Rule'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Rule')
            }
        };
    }
});

registerType(AdjudschedsettingssystemType);
module.exports = AdjudschedsettingssystemType;