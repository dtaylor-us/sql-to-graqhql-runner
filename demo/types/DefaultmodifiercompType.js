var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var DefaultmodifiercompType = new GraphQLObjectType({
    name: 'Defaultmodifiercomp',
    description: '@TODO DESCRIBE ME',

    fields: function getDefaultmodifiercompFields() {
        return {
            defaultModifierCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifier26CalcType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifier26Pct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifier26AmtLimit: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierTcCalcType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierTcPct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierTcAmtLimit: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dmeModifierCalcType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dmeModifierPct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dmeModifierAmtLimit: {
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

            doNotAssignInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            defaultModifierCompDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ownerGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingExternalId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalSourceSystemType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            defaultModifierCompVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            defaultModifierCompStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            activationDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deactivationDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(DefaultmodifiercompType);
module.exports = DefaultmodifiercompType;