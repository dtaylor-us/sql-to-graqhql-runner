var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemberserviceplanType = new GraphQLObjectType({
    name: 'Memberserviceplan',
    description: '@TODO DESCRIBE ME',

    fields: function getMemberserviceplanFields() {
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

            subsAffiliationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servicePlanId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servicePlanType: {
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

            benefitBundleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleOptionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractOptId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractPlanOptionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            productId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            product: {
                type: getType('Product'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Product')
            },

            carrierId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrier: {
                type: getType('Carrier'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Carrier')
            },

            lineOfBusinessId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            brandingEntity: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            controlPlanId: {
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
            }
        };
    }
});

registerType(MemberserviceplanType);
module.exports = MemberserviceplanType;