var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ServcompType = new GraphQLObjectType({
    name: 'Servcomp',
    description: '@TODO DESCRIBE ME',

    fields: function getServcompFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            servCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servCompVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            servCompDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            placeOfServiceSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            diagnosisSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            revenueSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provSpecialtySetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billTypeSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            compStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ownerGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            doNotAssignInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            activationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deactivationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            origActivationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            origDeactivationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            validInd: {
                type: GraphQLInt,
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

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            benefitDefInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            freeFormCodesInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            validationJobSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ServcompType);
module.exports = ServcompType;