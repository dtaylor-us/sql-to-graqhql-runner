var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ServcompservdetailType = new GraphQLObjectType({
    name: 'Servcompservdetail',
    description: '@TODO DESCRIBE ME',

    fields: function getServcompservdetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            servCompServId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servCompVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procCodeDefType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            diagCodeDefType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provCodeDefType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            posCodeDefType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billTypeCodeDefType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierCodeDefType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            revenueCodeDefType: {
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

            includeNoProcCodeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            includeNoPosCodeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            includeNoModifierCodeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            includeNoProvCodeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ServcompservdetailType);
module.exports = ServcompservdetailType;