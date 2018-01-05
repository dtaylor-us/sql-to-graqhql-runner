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

var ProviderType = new GraphQLObjectType({
    name: 'Provider',
    description: '@TODO DESCRIBE ME',

    fields: function getProviderFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            providerType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameLast: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameFirst: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameFirstSub: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameMiddle: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameSalutation: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameSuffix: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            gender: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            birthDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            ethnicity: {
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
            },

            expirationDate: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            organizationName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalSourceSystemType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            originalSourceSystemId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            nameSuffixTitle: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            expirationReason: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            epsdtInd: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            epsdtProgram: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            externalChangeDateTime: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            carriers: {
                type: new GraphQLList(getType('Carrier')),
                description: 'Carriers belonging to this Provider',
                resolve: getEntityResolver('Carrier'),

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

            claimheaders: {
                type: new GraphQLList(getType('Claimheader')),
                description: 'Claimheaders belonging to this Provider',
                resolve: getEntityResolver('Claimheader'),

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

            claimlineinsts: {
                type: new GraphQLList(getType('Claimlineinst')),
                description: 'Claimlineinsts belonging to this Provider',
                resolve: getEntityResolver('Claimlineinst'),

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

            claimlineprofs: {
                type: new GraphQLList(getType('Claimlineprof')),
                description: 'Claimlineprofs belonging to this Provider',
                resolve: getEntityResolver('Claimlineprof'),

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

            claimpricinginputheaders: {
                type: new GraphQLList(getType('Claimpricinginputheader')),
                description: 'Claimpricinginputheaders belonging to this Provider',
                resolve: getEntityResolver('Claimpricinginputheader'),

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

            claimproviders: {
                type: new GraphQLList(getType('Claimprovider')),
                description: 'Claimproviders belonging to this Provider',
                resolve: getEntityResolver('Claimprovider'),

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

            claimprovidersNatlProvider: {
                type: new GraphQLList(getType('Claimprovider')),
                description: 'Claimproviders belonging to this Provider..? (natlProviderID)',
                resolve: getEntityResolver('Claimprovider'),

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

            claimprovtins: {
                type: new GraphQLList(getType('Claimprovtin')),
                description: 'Claimprovtins belonging to this Provider',
                resolve: getEntityResolver('Claimprovtin'),

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

            lineofbusinesses: {
                type: new GraphQLList(getType('Lineofbusiness')),
                description: 'Lineofbusinesses belonging to this Provider',
                resolve: getEntityResolver('Lineofbusiness'),

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

            memberaddressprovs: {
                type: new GraphQLList(getType('Memberaddressprov')),
                description: 'Memberaddressprovs belonging to this Provider',
                resolve: getEntityResolver('Memberaddressprov'),

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

            providerauditdetails: {
                type: new GraphQLList(getType('Providerauditdetail')),
                description: 'Providerauditdetails belonging to this Provider',
                resolve: getEntityResolver('Providerauditdetail'),

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

registerType(ProviderType);
module.exports = ProviderType;