var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AdjudscheddupclaimType = new GraphQLObjectType({
    name: 'Adjudscheddupclaim',
    description: '@TODO DESCRIBE ME',

    fields: function getAdjudscheddupclaimFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            dupProvTinid: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupProviderId: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupProvider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            dupPrimaryDiag: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupBilledCharges: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupDosFrom: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupProcedure: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupLineItemFee: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupDentalModifier: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupDentalPos: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupToothId: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupTooth: {
                type: getType('Tooth'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Tooth')
            },

            dupInstModifier: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupBillType: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupPrinProcedure: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupDrg: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupRevCode: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupProfModifier: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupProfDosThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupProfPos: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupSvcLineProviderId: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupSvcLineProvider: {
                type: getType('Provider'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Provider')
            },

            dupRxDateWritten: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupExpenseDosThru: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupDentalUserReview: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupDentalDenyValue: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupInstUserReview: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupInstDenyValue: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupProfUserReview: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupProfDenyValue: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupRxUserReview: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupRxDenyValue: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupExpenseUserReview: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupExpenseDenyValue: {
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

            dupBilledToIcpmr: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupCheckRmoInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupPartialDateRange: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dupFullDateRange: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AdjudscheddupclaimType);
module.exports = AdjudscheddupclaimType;