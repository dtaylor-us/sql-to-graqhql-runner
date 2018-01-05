var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var UtilizationplanType = new GraphQLObjectType({
    name: 'Utilizationplan',
    description: '@TODO DESCRIBE ME',

    fields: function getUtilizationplanFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            utilizationPlanType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            utilizationPlanName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            longDesc: {
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

            effectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expirationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            includeChildMgInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            doNotSellDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            doNotRenewDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adminVendorId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adminVendor: {
                type: getType('Vendor'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Vendor')
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

registerType(UtilizationplanType);
module.exports = UtilizationplanType;