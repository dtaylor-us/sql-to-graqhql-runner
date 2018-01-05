var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLString = GraphQL.GraphQLString;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLList = GraphQL.GraphQLList;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var VendorType = new GraphQLObjectType({
    name: 'Vendor',
    description: '@TODO DESCRIBE ME',

    fields: function getVendorFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            organizationName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalVendorId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalVendor: {
                type: getType('Vendor'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Vendor')
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

            claimpricingoutputdetails: {
                type: new GraphQLList(getType('Claimpricingoutputdetail')),
                description: 'Claimpricingoutputdetails belonging to this Vendor',
                resolve: getEntityResolver('Claimpricingoutputdetail'),

                args: {
                    limit: {
                        name: 'limit',
                        type: GraphQLInt
                    },

                    offset: {
                        name: 'offset',
                        type: GraphQLInt
                    }
                }
            },

            memgroups: {
                type: new GraphQLList(getType('Memgroup')),
                description: 'Memgroups belonging to this Vendor',
                resolve: getEntityResolver('Memgroup'),

                args: {
                    limit: {
                        name: 'limit',
                        type: GraphQLInt
                    },

                    offset: {
                        name: 'offset',
                        type: GraphQLInt
                    }
                }
            },

            memgroupcontractplanoptions: {
                type: new GraphQLList(getType('Memgroupcontractplanoption')),
                description: 'Memgroupcontractplanoptions belonging to this Vendor',
                resolve: getEntityResolver('Memgroupcontractplanoption'),

                args: {
                    limit: {
                        name: 'limit',
                        type: GraphQLInt
                    },

                    offset: {
                        name: 'offset',
                        type: GraphQLInt
                    }
                }
            },

            serviceplans: {
                type: new GraphQLList(getType('Serviceplan')),
                description: 'Serviceplans belonging to this Vendor',
                resolve: getEntityResolver('Serviceplan'),

                args: {
                    limit: {
                        name: 'limit',
                        type: GraphQLInt
                    },

                    offset: {
                        name: 'offset',
                        type: GraphQLInt
                    }
                }
            },

            utilizationplans: {
                type: new GraphQLList(getType('Utilizationplan')),
                description: 'Utilizationplans belonging to this Vendor',
                resolve: getEntityResolver('Utilizationplan'),

                args: {
                    limit: {
                        name: 'limit',
                        type: GraphQLInt
                    },

                    offset: {
                        name: 'offset',
                        type: GraphQLInt
                    }
                }
            },

            vendors: {
                type: new GraphQLList(getType('Vendor')),
                description: 'Vendors belonging to this Vendor',
                resolve: getEntityResolver('Vendor'),

                args: {
                    limit: {
                        name: 'limit',
                        type: GraphQLInt
                    },

                    offset: {
                        name: 'offset',
                        type: GraphQLInt
                    }
                }
            }
        };
    }
});

registerType(VendorType);
module.exports = VendorType;