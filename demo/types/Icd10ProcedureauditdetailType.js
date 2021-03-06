var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var Icd10ProcedureauditdetailType = new GraphQLObjectType({
    name: 'Icd10Procedureauditdetail',
    description: '@TODO DESCRIBE ME',

    fields: function getIcd10ProcedureauditdetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
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

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            icd10ProcedureId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            icd10Procedure: {
                type: getType('Icd10Procedure'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Icd10Procedure')
            },

            auditText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tableName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(Icd10ProcedureauditdetailType);
module.exports = Icd10ProcedureauditdetailType;