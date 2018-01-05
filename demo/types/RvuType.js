var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var RvuType = new GraphQLObjectType({
    name: 'Rvu',
    description: '@TODO DESCRIBE ME',

    fields: function getRvuFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            procedureCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            modifierCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            description: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            multProc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            statusCode: {
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

            nonFacNaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            facNaInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            facPeRvu: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nonFacPeRvu: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            workRvu: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mpRvu: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nonFacTotal: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            facTotal: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            pcTcType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            globalSurgeryDays: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            preoperativePct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            postoperativePct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            intraoperativePct: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            bilatSurg: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            asstSurg: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            coSurg: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            teamSurg: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            endoBase: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            convFactor: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            supervisionOfDiagProc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            calcFlag: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            diagImagingFamilyCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nonFacPeForOppsAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            facPeForOppsAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mpForOppsAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            changeUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(RvuType);
module.exports = RvuType;