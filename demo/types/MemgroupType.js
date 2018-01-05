var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemgroupType = new GraphQLObjectType({
    name: 'Memgroup',
    description: '@TODO DESCRIBE ME',

    fields: function getMemgroupFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memGroupName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            alphaParentId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            childInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            industryClassCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            industryClassCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            collectEmpDataInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            claimRolloverInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            organizationType: {
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

            enablePin: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memGroupType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            exchangeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupInsuringRulePopInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            vendorId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            vendor: {
                type: getType('Vendor'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Vendor')
            },

            customerSupportSensitiveInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            idCardVendorCardForm: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemgroupType);
module.exports = MemgroupType;