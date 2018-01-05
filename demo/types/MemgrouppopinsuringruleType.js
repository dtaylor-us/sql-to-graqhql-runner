var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemgrouppopinsuringruleType = new GraphQLObjectType({
    name: 'Memgrouppopinsuringrule',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgrouppopinsuringruleFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupPopulationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pcpRandomizationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            insuranceContinuationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            onshoreServiceLevelCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            earlyRetirementInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            earlyRetirementMinimumAge: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            workingRetirementInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            workingRetirementMinimumAge: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            newbornAutoAddInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            survivingSpouseInd: {
                type: GraphQLInt,
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

            continuationResponsibilityType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            countNewbornForCovLevelCodeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemgrouppopinsuringruleType);
module.exports = MemgrouppopinsuringruleType;