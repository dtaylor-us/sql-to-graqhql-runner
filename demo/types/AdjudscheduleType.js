var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var AdjudscheduleType = new GraphQLObjectType({
    name: 'Adjudschedule',
    description: '@TODO DESCRIBE ME',

    fields: function getAdjudscheduleFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            editCodeType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            criticalInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            activeInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            acceptInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            noActionInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            processAction: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            autoDenyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            autoPendInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            autoDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            autoLetterCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            procInstr: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            uncleanEditInd: {
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

            queueDenyDrc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            queueDenyInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            useDefaultTemplateInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            acceptEnabledInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            pendEnabledInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            denyEnabledInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            overrideEnabledInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            routeEnabledInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            generateNewEditEnabledInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            allowDenyWithoutDrcInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            postPendAcceptEnabledInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            postPendDenyEnabledInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            postPendRouteEnabledInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            postPendOverrideEnabledInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(AdjudscheduleType);
module.exports = AdjudscheduleType;