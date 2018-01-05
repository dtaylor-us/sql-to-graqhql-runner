var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MedpolicyschedtimelineruleType = new GraphQLObjectType({
    name: 'Medpolicyschedtimelinerule',
    description: '@TODO DESCRIBE ME',

    fields: function getMedpolicyschedtimelineruleFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            medPolicySchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medPolicySchedTimelineId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medPolicyRuleId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            medPolicyRule: {
                type: getType('Rule'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Rule')
            },

            processOrderNumber: {
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
            }
        };
    }
});

registerType(MedpolicyschedtimelineruleType);
module.exports = MedpolicyschedtimelineruleType;