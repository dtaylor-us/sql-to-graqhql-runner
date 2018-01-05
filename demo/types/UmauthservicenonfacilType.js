var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var UmauthservicenonfacilType = new GraphQLObjectType({
    name: 'Umauthservicenonfacil',
    description: '@TODO DESCRIBE ME',

    fields: function getUmauthservicenonfacilFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            umAuthServiceId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            umAuthId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            posCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceDescriptionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifier1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifier2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifier3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifier4: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureUnitCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            unitOfMeasure: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            unitPerFrequencyCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            procedureFrequencyType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceStartDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceEndDate: {
                type: GraphQLString,
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

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            advanceNotifyDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(UmauthservicenonfacilType);
module.exports = UmauthservicenonfacilType;