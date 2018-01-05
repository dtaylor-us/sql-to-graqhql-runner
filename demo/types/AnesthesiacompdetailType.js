var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AnesthesiacompdetailType = new GraphQLObjectType({
    name: 'Anesthesiacompdetail',
    description: '@TODO DESCRIBE ME',

    fields: function getAnesthesiacompdetailFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            anesthesiaCompVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            roundingType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            intervalValue: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            minFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            minThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            procCodeFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procCodeThru: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reimbDollarValue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reimbPercentValue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            greaterThanBilledInd: {
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

            previousMinOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            calculationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            manualReviewInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            specialProcessingInst: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            notToExceedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            enforceModOrderInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            deleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            midpointValue: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            defaultAsaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            modifierAssignType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            allAnesthesiaModInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AnesthesiacompdetailType);
module.exports = AnesthesiacompdetailType;