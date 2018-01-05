var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MembervitalType = new GraphQLObjectType({
    name: 'Membervital',
    description: '@TODO DESCRIBE ME',

    fields: function getMembervitalFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memberIndicatorId: {
                type: GraphQLString,
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

            weight: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            height: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            systolicBp: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            diastolicBp: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            totalCholesterol: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            hdlCholesterol: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ldlCholesterol: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            triglycerides: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            whiteBloodCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            redBloodCount: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            hematocritLevel: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            hemaglobinLevel: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            plateletCount: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            glucoseLevel: {
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

registerType(MembervitalType);
module.exports = MembervitalType;