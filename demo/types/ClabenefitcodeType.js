var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClabenefitcodeType = new GraphQLObjectType({
    name: 'Clabenefitcode',
    description: '@TODO DESCRIBE ME',

    fields: function getClabenefitcodeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            userBctlvOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            userSalesTaxOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            userPreBenefitReductOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            manualCodeSelectionInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            userOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            servCompVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servCompId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servCompServId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            servCompServDetailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procedureSetCatId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            placeOfServiceSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            placeOfServiceSetCatId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            diagnosisSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            diagnosisSetCatId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            revenueSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            revenueSetCatId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provSpecialtySetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provSpecialtySetCatId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billTypeSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            billTypeSetCatId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            etBenefitInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            etState: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            regEntityId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            regEntityGuardrailId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitPoints: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitTierParStatusType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            inOutAreaType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalBenefitCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalTierNumber: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            originalCodeLevel: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            originalVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            eocBenefitTierOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            eocBenefitCodeOverrideInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            contractClaimType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            eoiInvestigationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            covConditionDiagnosisSetCatId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            covConditionProcedureSetCatId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            covConditionMemIndicatorId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benCodeCoverage: {
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
            }
        };
    }
});

registerType(ClabenefitcodeType);
module.exports = ClabenefitcodeType;