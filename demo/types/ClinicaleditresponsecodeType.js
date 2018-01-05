var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClinicaleditresponsecodeType = new GraphQLObjectType({
    name: 'Clinicaleditresponsecode',
    description: '@TODO DESCRIBE ME',

    fields: function getClinicaleditresponsecodeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            shortDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            longDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            clinicalEditRuleCategory: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            clinicalEditClassification: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            clinicalEditActionCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            denyReasonCode: {
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

registerType(ClinicaleditresponsecodeType);
module.exports = ClinicaleditresponsecodeType;