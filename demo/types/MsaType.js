var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MsaType = new GraphQLObjectType({
    name: 'Msa',
    description: '@TODO DESCRIBE ME',

    fields: function getMsaFields() {
        return {
            msaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msa: {
                type: getType('Msa'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Msa')
            },

            msaType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msaName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msaStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msaClaimSource: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            msaVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            msaTemplateId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msaTemplateInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            msaVersionStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            enableExpReimbInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            enableHealthReimbInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            validInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            descriptionText: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            origValidationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            includeChildMgInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            assignedInd: {
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
            },

            externalAccountInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dateInvalidated: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            activationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deactivationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            origActivationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            origDeactivationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            productVersionId: {
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

            doNotSellDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            doNotRenewDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitPeriodCalculationBasis: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            timelineMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            levelContribInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            accountHolderType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            productId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            product: {
                type: getType('Product'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Product')
            },

            adminVendorId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            adminVendor: {
                type: getType('Vendor'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Vendor')
            }
        };
    }
});

registerType(MsaType);
module.exports = MsaType;