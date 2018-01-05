var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var NetschedulelogoType = new GraphQLObjectType({
    name: 'Netschedulelogo',
    description: '@TODO DESCRIBE ME',

    fields: function getNetschedulelogoFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            networkScheduleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            logoId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            logo: {
                type: getType('Logo'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Logo')
            },

            serviceAreaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            logoAddressType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            netScheduleLogoDescription: {
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

registerType(NetschedulelogoType);
module.exports = NetschedulelogoType;