var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ProvidermalpracticeType = new GraphQLObjectType({
    name: 'Providermalpractice',
    description: '@TODO DESCRIBE ME',

    fields: function getProvidermalpracticeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            providerId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            provider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            databankControlNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reportCreateDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reportChangeDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            npdbEntityRelation: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mmrActCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mmrActCode2: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mmrActStartDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mmrActEndDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            paymentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mmrPaymentType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            totalPaymentAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            numberPractitioners: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            mmrPaymentAction: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            judgmentDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            caseNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            courtName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            courtFileNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mmrClaimDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mmrPaymentDesc: {
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

registerType(ProvidermalpracticeType);
module.exports = ProvidermalpracticeType;