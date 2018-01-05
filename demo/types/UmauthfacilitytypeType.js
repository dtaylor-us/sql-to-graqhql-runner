var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var UmauthfacilitytypeType = new GraphQLObjectType({
    name: 'Umauthfacilitytype',
    description: '@TODO DESCRIBE ME',

    fields: function getUmauthfacilitytypeFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            umAuthServiceId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            umAuthId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            posCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            serviceDescriptionType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expectedAdmissionDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expectedDischargeDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            actualAdmissionDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            actualDischargeDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            actualLengthOfStay: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            retrospectiveNotificationInd: {
                type: GraphQLInt,
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

            createUserId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            createDateTime: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            updateVersion: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            advanceNotifyDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            admissionNotifyDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            dischargeNotifyDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(UmauthfacilitytypeType);
module.exports = UmauthfacilitytypeType;