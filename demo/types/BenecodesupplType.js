var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BenecodesupplType = new GraphQLObjectType({
    name: 'Benecodesuppl',
    description: '@TODO DESCRIBE ME',

    fields: function getBenecodesupplFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            semiPrivateRate: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            waiveNewbornCopay: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            combineNewbornCharge: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            quadrantUl: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            quadrantLl: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            quadrantUr: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            quadrantLr: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            priorExtractRule: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            toothType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            compRestorationLimit: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            porcelainCrownLimit: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            toothRegion: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            toothArch: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            surfaceO: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surfaceI: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surfaceLa: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surfaceF: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surfaceL: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surfaceM: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surfaceD: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            surfaceB: {
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

            prescriptionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxDeliveryMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            rxDaysSupply: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(BenecodesupplType);
module.exports = BenecodesupplType;