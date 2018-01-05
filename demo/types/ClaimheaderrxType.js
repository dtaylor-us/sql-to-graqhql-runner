var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClaimheaderrxType = new GraphQLObjectType({
    name: 'Claimheaderrx',
    description: '@TODO DESCRIBE ME',

    fields: function getClaimheaderrxFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            releaseInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            currentIllnessDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pregnancyDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            referringProvId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            referringProvLast: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            referringProvFirst: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            referralId: {
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

            posCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            assignBenPlan: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            patientAcctNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            placeOfServiceName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            relationshipCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalBilledAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalTaxAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            patientLocation: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            patientLocationDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClaimheaderrxType);
module.exports = ClaimheaderrxType;