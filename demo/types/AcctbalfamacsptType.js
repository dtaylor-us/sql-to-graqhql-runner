var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AcctbalfamacsptType = new GraphQLObjectType({
    name: 'Acctbalfamacspt',
    description: '@TODO DESCRIBE ME',

    fields: function getAcctbalfamacsptFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            dedAccessPointAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            dedAccessPointMet: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oopAccessPointAmt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            oopAccessPointMet: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lastClaimDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            familyLevel: {
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

            acsPtEffDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            acsPtExpDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            invalidInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AcctbalfamacsptType);
module.exports = AcctbalfamacsptType;