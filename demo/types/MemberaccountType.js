var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MemberaccountType = new GraphQLObjectType({
    name: 'Memberaccount',
    description: '@TODO DESCRIBE ME',

    fields: function getMemberaccountFields() {
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

            msaId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            msa: {
                type: getType('Msa'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Msa')
            },

            accountEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            accountExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            acctSeqNum: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            msaType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            familyType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subscriberId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            subsAffiliationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bankId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bank: {
                type: getType('Bank'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Bank')
            },

            accountNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coordPay: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            planOptionSeqNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            controlPlanId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memberBenefitId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            invalidInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            eeobOnly: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            finPolicyId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planVariation: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            reportingCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            suffix: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            claimAccount: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            productCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            marketType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coverageType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            iPlanInd: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            payMemberInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            noSubCovInd: {
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

            splitOopDedInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            spendGraceExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            acctBalSetId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calculatedEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            purseInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            termMethod: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            planCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coverageClassCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            cobraInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            classCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            clientRptCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            clientLocCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            contribBeginOn: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            memGroupContractId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            parentSubsAffiliationId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MemberaccountType);
module.exports = MemberaccountType;