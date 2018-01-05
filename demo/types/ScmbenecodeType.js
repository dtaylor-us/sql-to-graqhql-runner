var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ScmbenecodeType = new GraphQLObjectType({
    name: 'Scmbenecode',
    description: '@TODO DESCRIBE ME',

    fields: function getScmbenecodeFields() {
        return {
            scmId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            scm: {
                type: getType('Scm'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Scm')
            },

            benefitCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            benefitCodeEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitCodeExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allProcCodes: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allExceptProcCodes: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            noProcCodes: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allDiagCodes: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allExceptDiagCodes: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allProvCodes: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allExceptProvCodes: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allPosCodes: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allExceptPosCodes: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            noPosCodes: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allBillTypeCodes: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allExceptBillTypeCodes: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allModifierCodes: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allExceptModifierCodes: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            noModifierCodes: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allRevenueCodes: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allExceptRevenueCodes: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            professionalInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            institutionalInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dentalInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pharmacyInd: {
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

registerType(ScmbenecodeType);
module.exports = ScmbenecodeType;