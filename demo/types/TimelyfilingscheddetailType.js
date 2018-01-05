var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var TimelyfilingscheddetailType = new GraphQLObjectType({
    name: 'Timelyfilingscheddetail',
    description: '@TODO DESCRIBE ME',

    fields: function getTimelyfilingscheddetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            timelyFilingSchedId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            effectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expirationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimSubmitter: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allParStatusTypeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            maxFilingLimit: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            durationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobMaxFilingLimit: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            cobDurationType: {
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

registerType(TimelyfilingscheddetailType);
module.exports = TimelyfilingscheddetailType;