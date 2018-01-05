var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var DofrschedType = new GraphQLObjectType({
    name: 'Dofrsched',
    description: '@TODO DESCRIBE ME',

    fields: function getDofrschedFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            dofrSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dofrSchedVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dofrSchedStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            schedDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ownerGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            doNotAssignInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            activationDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deactivationDateTime: {
                type: GraphQLInt,
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

            riskOutOfAreaDefinitionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaAddressType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provTaxonomyType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimDiagnosisPointerType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(DofrschedType);
module.exports = DofrschedType;