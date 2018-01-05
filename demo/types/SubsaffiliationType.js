var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SubsaffiliationType = new GraphQLObjectType({
    name: 'Subsaffiliation',
    description: '@TODO DESCRIBE ME',

    fields: function getSubsaffiliationFields() {
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

            subscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            relationshipCode: {
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

            parentSubsAffiliationId: {
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

            effectuationInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            logicalDeleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            enrollSignatureDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            courtOrderDependentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            courtOrderExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberAddressId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subscriberIdChangeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            relatedMemGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            courtOrderEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(SubsaffiliationType);
module.exports = SubsaffiliationType;