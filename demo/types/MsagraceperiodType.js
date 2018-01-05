var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MsagraceperiodType = new GraphQLObjectType({
    name: 'Msagraceperiod',
    description: '@TODO DESCRIBE ME',

    fields: function getMsagraceperiodFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            gracePeriodThruDay: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            gracePeriodThruMonth: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            graceEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            graceExpDate: {
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

registerType(MsagraceperiodType);
module.exports = MsagraceperiodType;