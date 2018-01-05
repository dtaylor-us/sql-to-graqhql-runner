var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BenefitbundleType = new GraphQLObjectType({
    name: 'Benefitbundle',
    description: '@TODO DESCRIBE ME',

    fields: function getBenefitbundleFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            bundleType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleLongDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleStatus: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            includeMemGroupChildrenInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            lockMemberGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            doNotRenewDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            doNotSellDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundleExpDate: {
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

            employeeCountType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            groupCountFrom: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            groupCountThru: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitBundlegroupIndivType: {
                type: GraphQLString,
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

            validInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            multiChoiceInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            assignedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(BenefitbundleType);
module.exports = BenefitbundleType;