var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var SysphonenumberType = new GraphQLObjectType({
    name: 'Sysphonenumber',
    description: '@TODO DESCRIBE ME',

    fields: function getSysphonenumberFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            phoneNumberName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phoneInternationalInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            phoneNum: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phoneExt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            employerPhoneTypeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            memberPhoneTypeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            providerPhoneTypeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            producerPhoneTypeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            faxNumber: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            changeDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
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

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(SysphonenumberType);
module.exports = SysphonenumberType;