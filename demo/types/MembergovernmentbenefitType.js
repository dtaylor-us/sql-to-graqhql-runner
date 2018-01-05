var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MembergovernmentbenefitType = new GraphQLObjectType({
    name: 'Membergovernmentbenefit',
    description: '@TODO DESCRIBE ME',

    fields: function getMembergovernmentbenefitFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            memberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            member: {
                type: getType('Member'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Member')
            },

            govtBenefitType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            govtBenefitEligibilityReasonCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            govtBenefitEligibilityEffectiveDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            govtBenefitEnrollmentDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            govtBenefitDisenrollmentDate: {
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

registerType(MembergovernmentbenefitType);
module.exports = MembergovernmentbenefitType;