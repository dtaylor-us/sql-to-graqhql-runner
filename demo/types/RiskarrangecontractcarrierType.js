var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var RiskarrangecontractcarrierType = new GraphQLObjectType({
    name: 'Riskarrangecontractcarrier',
    description: '@TODO DESCRIBE ME',

    fields: function getRiskarrangecontractcarrierFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            riskArrangeContractDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            riskArrangeContractVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
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

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(RiskarrangecontractcarrierType);
module.exports = RiskarrangecontractcarrierType;