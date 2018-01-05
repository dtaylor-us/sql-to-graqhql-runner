var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemberinvaccidentType = new GraphQLObjectType({
    name: 'Memberinvaccident',
    description: '@TODO DESCRIBE ME',

    fields: function getMemberinvaccidentFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            member: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            accidentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accidentLocationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            propertyName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ownerName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ownerPhone1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ownerPhone1Ext: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ownerPhone1Type: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ownerPhone2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ownerPhone2Ext: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ownerPhone2Type: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            injuryAddress1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            injuryAddress2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            injuryCity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            injuryState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            injuryPostalCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            injuryCountry: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            shortNote: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tplDecisionCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyPhone1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyPhone1Ext: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyPhone1Type: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyPhone2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyPhone2Ext: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyPhone2Type: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyAddress1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyAddress2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyCity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyPostalCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyCountry: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyCarrier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            respPartyPolicyId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveTplDenyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveTplDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            waiveTplReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            attorneyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            attorneyFirmName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            attorneyName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            attorneyPhone1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            attorneyPhone1Ext: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            attorneyPhone1Type: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            attorneyPhone2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            attorneyPhone2Ext: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            attorneyPhone2Type: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            attorneyAddress1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            attorneyAddress2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            attorneyCity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            attorneyState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            attorneyPostalCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            attorneyCountry: {
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

registerType(MemberinvaccidentType);
module.exports = MemberinvaccidentType;