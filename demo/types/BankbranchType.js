var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BankbranchType = new GraphQLObjectType({
    name: 'Bankbranch',
    description: '@TODO DESCRIBE ME',

    fields: function getBankbranchFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            branchId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            branchName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contactName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            email: {
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

            phone2Type: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phone2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phone2Ext: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phone3Type: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phone3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phone3Ext: {
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

registerType(BankbranchType);
module.exports = BankbranchType;