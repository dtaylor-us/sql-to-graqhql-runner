var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ZipcodefileuploaddetailType = new GraphQLObjectType({
    name: 'Zipcodefileuploaddetail',
    description: '@TODO DESCRIBE ME',

    fields: function getZipcodefileuploaddetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            zipCodeFileUploadHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            zip: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            zipType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            city: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            countyName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            countyFips: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stateName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            state: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stateFips: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            metroServiceArea: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            areaCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            timeZone: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            utcStaging: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dst: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            latitudeDegStaging: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            longitudeDegStaging: {
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

registerType(ZipcodefileuploaddetailType);
module.exports = ZipcodefileuploaddetailType;