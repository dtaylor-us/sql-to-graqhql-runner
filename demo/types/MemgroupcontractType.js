var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemgroupcontractType = new GraphQLObjectType({
    name: 'Memgroupcontract',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgroupcontractFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
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

            contractDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            documentControlNumber: {
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

            contractStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalContractDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            validationState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            renewalMonth: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            renewalDayOfMonth: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defaultAccountOrderInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            promptPaySchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contractExpirationReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            renewalContractLengthType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lastRetroTagDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lastEffectiveRuleTagDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalActivationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            hasBeenActivatedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            migrationInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            priorExpirationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorExpirationReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contractReinstatementReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemgroupcontractType);
module.exports = MemgroupcontractType;