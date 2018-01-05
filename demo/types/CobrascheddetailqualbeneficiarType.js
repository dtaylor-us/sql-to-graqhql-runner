var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var CobrascheddetailqualbeneficiarType = new GraphQLObjectType({
    name: 'Cobrascheddetailqualbeneficiar',
    description: '@TODO DESCRIBE ME',

    fields: function getCobrascheddetailqualbeneficiarFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            cobraSchedDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobraSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            relationshipCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ageFromYears: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageFromMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageFromDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageThruYears: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageThruMonths: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageThruDays: {
                type: GraphQLInt,
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

registerType(CobrascheddetailqualbeneficiarType);
module.exports = CobrascheddetailqualbeneficiarType;