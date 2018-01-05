var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var Zipplus4Type = new GraphQLObjectType({
    name: 'Zipplus4',
    description: '@TODO DESCRIBE ME',

    fields: function getZipplus4Fields() {
        return {
            zip: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            zip4: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            city: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            preDirection: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            street: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            streetSuffix: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postDirection: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lowAddress: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            highAddress: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oddInd: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            recordType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            carrierRouteId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            buildingName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            secondaryAddressAbbr: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            secondaryLowAddress: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            secondaryHighAddress: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            secondaryOddInd: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            zipAddOnLowSegment: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            zipAddOnHighSegment: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            zipAddOnLowSector: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            zipAddOnHighSector: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            zip4Range: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            state: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            countyFips: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            congressDistrictNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            urbanCityStateKey: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            preferredLastLineCityStateKey: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            municipalityCityStateKey: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lacsStatusIndicator: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            govtBuildingInd: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            financeNumber: {
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

registerType(Zipplus4Type);
module.exports = Zipplus4Type;