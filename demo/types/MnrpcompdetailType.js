var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MnrpcompdetailType = new GraphQLObjectType({
    name: 'Mnrpcompdetail',
    description: '@TODO DESCRIBE ME',

    fields: function getMnrpcompdetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            mnrpCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mnrpCompDetailExternalId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mnrpCompDetailDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaRegionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceAreaRegion: {
                type: getType('Region'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Region')
            },

            placeOfServiceSetCatDetailId: {
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

registerType(MnrpcompdetailType);
module.exports = MnrpcompdetailType;