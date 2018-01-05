var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MnrpcompdetailprocType = new GraphQLObjectType({
    name: 'Mnrpcompdetailproc',
    description: '@TODO DESCRIBE ME',

    fields: function getMnrpcompdetailprocFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            mnrpCompDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mnrpCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            perUnitAllowedAmount: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            manualReviewInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            modifierCode1: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierCode2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierCode3: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierCode4: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierCode5: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierCode6: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierCode7: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierCode8: {
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

registerType(MnrpcompdetailprocType);
module.exports = MnrpcompdetailprocType;