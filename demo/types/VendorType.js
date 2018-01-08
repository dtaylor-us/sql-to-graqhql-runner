var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var VendorType = new GraphQLObjectType({
    name: 'Vendor',
    description: '@TODO DESCRIBE ME',

    fields: function getVendorFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            organizationName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalVendorId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalVendor: {
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

registerType(VendorType);
module.exports = VendorType;