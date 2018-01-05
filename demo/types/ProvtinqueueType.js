var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProvtinqueueType = new GraphQLObjectType({
    name: 'Provtinqueue',
    description: '@TODO DESCRIBE ME',

    fields: function getProvtinqueueFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            providerId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            providerTin: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provTinName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            w9Ind: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            w9LastDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            w9Dcnid: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            assignExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            assignEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            taxIdState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stateTaxId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dbaName: {
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

            city: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            state: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postalCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            country: {
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

            phone1Type: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phone1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phone1Ext: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            email: {
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

            referenceIdQual: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provTinid: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            entityOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ProvtinqueueType);
module.exports = ProvtinqueueType;