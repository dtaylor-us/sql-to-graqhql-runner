var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var CarrierlobpermitType = new GraphQLObjectType({
    name: 'Carrierlobpermit',
    description: '@TODO DESCRIBE ME',

    fields: function getCarrierlobpermitFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            carrierLineOfBusinessId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            licensingEntityPermitId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrierLobPermitEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrierLobPermitExpDate: {
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

registerType(CarrierlobpermitType);
module.exports = CarrierlobpermitType;