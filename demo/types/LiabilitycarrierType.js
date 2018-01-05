var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var LiabilitycarrierType = new GraphQLObjectType({
    name: 'Liabilitycarrier',
    description: '@TODO DESCRIBE ME',

    fields: function getLiabilitycarrierFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            liabCarrierName: {
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

            phone1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phone1Ext: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phone1Type: {
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

            phone2Type: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            email: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            businessUrl: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrierEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrierExpDate: {
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

            address3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            address4: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            address5: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            address1Sub: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(LiabilitycarrierType);
module.exports = LiabilitycarrierType;