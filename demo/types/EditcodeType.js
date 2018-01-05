var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var EditcodeType = new GraphQLObjectType({
    name: 'Editcode',
    description: '@TODO DESCRIBE ME',

    fields: function getEditcodeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            editCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            descriptionText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            criticalInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            paymentInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            acceptInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            noActionInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allowPendInd: {
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

            defaultProcInstr: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adjudSchedType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            overrideDescriptionText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            overrideDefaultProcInstr: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allowDenyWithoutDrcInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(EditcodeType);
module.exports = EditcodeType;