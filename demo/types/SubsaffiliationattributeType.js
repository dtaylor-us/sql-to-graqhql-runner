var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SubsaffiliationattributeType = new GraphQLObjectType({
    name: 'Subsaffiliationattribute',
    description: '@TODO DESCRIBE ME',

    fields: function getSubsaffiliationattributeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            subsAffiliationId: {
                type: GraphQLString,
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

            referenceIdQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            categoryType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            attributeValue: {
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
            }
        };
    }
});

registerType(SubsaffiliationattributeType);
module.exports = SubsaffiliationattributeType;