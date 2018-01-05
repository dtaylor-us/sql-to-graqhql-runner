var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var BenefitplantradingoopType = new GraphQLObjectType({
    name: 'Benefitplantradingoop',
    description: '@TODO DESCRIBE ME',

    fields: function getBenefitplantradingoopFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            benefitPlanTradingPartnerId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            benefitPlanVersionId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            stoplossOopid: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tradingPartnerAccumType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            tradingPartnerOopid: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            performCrossAccumInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            crossAccumType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            performCarryOverInd: {
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

registerType(BenefitplantradingoopType);
module.exports = BenefitplantradingoopType;