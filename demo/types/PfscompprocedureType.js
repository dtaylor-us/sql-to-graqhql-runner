var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var PfscompprocedureType = new GraphQLObjectType({
    name: 'Pfscompprocedure',
    description: '@TODO DESCRIBE ME',

    fields: function getPfscompprocedureFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            pfsCompVersionId: {
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

            procCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureCode: {
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

            allPosCodeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            posCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            placeOfServiceSetCatId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            greaterThanBilledInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            enforceModOrderInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitFromDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitFromLcd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitThruDt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ageLimitThruLcd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            genderLimit: {
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

            calculationType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            notToExceedAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deleteInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            modifierAssignType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            notEligibleInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            placeOfServiceCategoryId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(PfscompprocedureType);
module.exports = PfscompprocedureType;