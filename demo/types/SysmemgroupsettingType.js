var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SysmemgroupsettingType = new GraphQLObjectType({
    name: 'Sysmemgroupsetting',
    description: '@TODO DESCRIBE ME',

    fields: function getSysmemgroupsettingFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            cobAttestationFrequency: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobAttestationFreqDuration: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobAttestationDenyGracePeriod: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobAttestationDenyGracePeriodDuration: {
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

registerType(SysmemgroupsettingType);
module.exports = SysmemgroupsettingType;