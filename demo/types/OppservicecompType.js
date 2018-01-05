var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var OppservicecompType = new GraphQLObjectType({
    name: 'Oppservicecomp',
    description: '@TODO DESCRIBE ME',

    fields: function getOppservicecompFields() {
        return {
            oppServiceCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ownerGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ruleSetName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pricingServiceCategory: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            overrideDefaultProcSetInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            procedureSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            doNotAssignInd: {
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

            oppServiceCompDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            grouperPricedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            oppServiceCompVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            oppServiceCompStatus: {
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

registerType(OppservicecompType);
module.exports = OppservicecompType;