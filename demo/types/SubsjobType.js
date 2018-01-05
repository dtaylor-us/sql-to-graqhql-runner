var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SubsjobType = new GraphQLObjectType({
    name: 'Subsjob',
    description: '@TODO DESCRIBE ME',

    fields: function getSubsjobFields() {
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

            effectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expirationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            employStatusCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            annualIncome: {
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

            memberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            member: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            employClassCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            employBeginDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            employEndDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eligibilityBeginDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eligibilityEndDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phoneType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            userAttribute1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            userAttribute2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            userAttribute3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(SubsjobType);
module.exports = SubsjobType;