var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var CobrascheddetailgracetimeType = new GraphQLObjectType({
    name: 'Cobrascheddetailgracetime',
    description: '@TODO DESCRIBE ME',

    fields: function getCobrascheddetailgracetimeFields() {
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

            cobraSchedGraceTimeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobraSchedGraceTimeDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobraSchedGraceTimePeriod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobraSchedGraceTimeStatus: {
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

registerType(CobrascheddetailgracetimeType);
module.exports = CobrascheddetailgracetimeType;