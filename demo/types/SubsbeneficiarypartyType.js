var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SubsbeneficiarypartyType = new GraphQLObjectType({
    name: 'Subsbeneficiaryparty',
    description: '@TODO DESCRIBE ME',

    fields: function getSubsbeneficiarypartyFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            subscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subsAffiliationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subsBeneficiaryId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameLast: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameFirst: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameMiddle: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            birthDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            gender: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            relationshipCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            socialSecurityNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            beneficiaryType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            beneficiaryPct: {
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
            }
        };
    }
});

registerType(SubsbeneficiarypartyType);
module.exports = SubsbeneficiarypartyType;