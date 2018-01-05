var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MembertransferType = new GraphQLObjectType({
    name: 'Membertransfer',
    description: '@TODO DESCRIBE ME',

    fields: function getMembertransferFields() {
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

            transferInCarrier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transferOutCarrier: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transferInDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            transferOutDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            primingBalSentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            primingBalRcvdAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            primingBalSentDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            primingBalRcvdDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allocationSentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allocationRcvdAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allocationSentDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allocationRcvdDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rolloverSentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rolloverRcvdAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rolloverSentDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rolloverRcvdDate: {
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

            lastAllocSentDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lastAllocRcvdDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            invalidInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            roPrimingBalSentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            roPrimingBalRcvdAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            roPrimingBalSentDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            roPrimingBalRcvdDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rolloverBalAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rolloverBalDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalHracUsed: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalHrarUsed: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MembertransferType);
module.exports = MembertransferType;