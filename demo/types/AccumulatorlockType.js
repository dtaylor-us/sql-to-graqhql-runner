var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AccumulatorlockType = new GraphQLObjectType({
    name: 'Accumulatorlock',
    description: '@TODO DESCRIBE ME',

    fields: function getAccumulatorlockFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            processType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serverName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lockOwnerMemberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lockOwnerMember: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            }
        };
    }
});

registerType(AccumulatorlockType);
module.exports = AccumulatorlockType;