var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemacctacctbalhxxrefType = new GraphQLObjectType({
    name: 'Memacctacctbalhxxref',
    description: '@TODO DESCRIBE ME',

    fields: function getMemacctacctbalhxxrefFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemacctacctbalhxxrefType);
module.exports = MemacctacctbalhxxrefType;