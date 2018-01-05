var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MembertoothchartType = new GraphQLObjectType({
    name: 'Membertoothchart',
    description: '@TODO DESCRIBE ME',

    fields: function getMembertoothchartFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            member: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            procedureCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            toothId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tooth: {
                type: getType('Tooth'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Tooth')
            },

            supernumeraryInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            procCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            actualSvcsProcessed: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            toothType: {
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

registerType(MembertoothchartType);
module.exports = MembertoothchartType;