var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var DrgbasefileuploaddetailType = new GraphQLObjectType({
    name: 'Drgbasefileuploaddetail',
    description: '@TODO DESCRIBE ME',

    fields: function getDrgbasefileuploaddetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            drgBaseFileUploadHeaderId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            drgCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            finalRulePostAcutedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            finalRuleSpecialPayInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            fullDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            gmLos: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rw: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            amLos: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nationalPayment: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medSurg: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            drgStatus: {
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
            },

            drgVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(DrgbasefileuploaddetailType);
module.exports = DrgbasefileuploaddetailType;