var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemgroupcontractoptType = new GraphQLObjectType({
    name: 'Memgroupcontractopt',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgroupcontractoptFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            optionDescription: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            populationOpenEnrollmentInd: {
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

            runOutDate: {
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

            participationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            situsState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planYearMonth: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            enrollmentInsuringRulesPopInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            splitFamilyElectionsInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dependentOnlyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            relatedMemGroupTermInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            logicalDeleteReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            priorExpirationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemgroupcontractoptType);
module.exports = MemgroupcontractoptType;