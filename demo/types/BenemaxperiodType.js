var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BenemaxperiodType = new GraphQLObjectType({
    name: 'Benemaxperiod',
    description: '@TODO DESCRIBE ME',

    fields: function getBenemaxperiodFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            beneMaxId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitPlanVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maximumEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maximumExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            indivDollarMax: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            familyDollarMax: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            indivOccurMax: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            familyOccurMax: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maximumBufferDays: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maximumDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            maximumDtQty: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dollarMaxType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bodyPartLimitInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxBodyPartType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eventBasedLimitInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxEventType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceMustStartWithin: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            serviceCoveredThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            serviceCoveredDuration: {
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
            },

            suppressAccumDuringDedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(BenemaxperiodType);
module.exports = BenemaxperiodType;