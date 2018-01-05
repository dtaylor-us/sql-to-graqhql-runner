var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var UcrcompdetailType = new GraphQLObjectType({
    name: 'Ucrcompdetail',
    description: '@TODO DESCRIBE ME',

    fields: function getUcrcompdetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            ucrCompVersionId: {
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

            ucrCompDetailDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deleteInd: {
                type: GraphQLInt,
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
            },

            ucrHcpcsFileInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ucrMedicalFileInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ucrSurgicalFileInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(UcrcompdetailType);
module.exports = UcrcompdetailType;