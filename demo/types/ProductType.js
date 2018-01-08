var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProductType = new GraphQLObjectType({
    name: 'Product',
    description: '@TODO DESCRIBE ME',

    fields: function getProductFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
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

            productVersion: {
                type: GraphQLInt,
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

            productName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            productDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            productType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            productStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            copyProductId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            copyProduct: {
                type: getType('Product'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Product')
            },

            doNotSellDate: {
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

            doNotRenewDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parentProductId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parentProduct: {
                type: getType('Product'),
                description: '@TODO DESCRIBE ME (parent product)',
                resolve: getEntityResolver('Product')
            },

            alphaParentProductId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            alphaParentProduct: {
                type: getType('Product'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Product')
            },

            validInd: {
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

            excludeContractFinPenInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            excludeContractMedNecessityInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            validationJobSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dofrSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            delegSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ProductType);
module.exports = ProductType;