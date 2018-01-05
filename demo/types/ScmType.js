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

var ScmType = new GraphQLObjectType({
    name: 'Scm',
    description: '@TODO DESCRIBE ME',

    fields: function getScmFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString),
                description: '@TODO DESCRIBE ME'
            },

            scmDesc: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            validInd: {
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

            beneplansettings: {
                type: new GraphQLList(getType('Beneplansetting')),
                description: 'Beneplansettings belonging to this Scm',
                resolve: getEntityResolver('Beneplansetting'),

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

            scmbenecodeposcategories: {
                type: new GraphQLList(getType('Scmbenecodeposcategory')),
                description: 'Scmbenecodeposcategories belonging to this Scm',
                resolve: getEntityResolver('Scmbenecodeposcategory'),

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

            scmbenecodeproccategories: {
                type: new GraphQLList(getType('Scmbenecodeproccategory')),
                description: 'Scmbenecodeproccategories belonging to this Scm',
                resolve: getEntityResolver('Scmbenecodeproccategory'),

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

            scmvalidations: {
                type: new GraphQLList(getType('Scmvalidation')),
                description: 'Scmvalidations belonging to this Scm',
                resolve: getEntityResolver('Scmvalidation'),

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

            scmbenecodes: {
                type: new GraphQLList(getType('Scmbenecode')),
                description: 'Scmbenecodes belonging to this Scm',
                resolve: getEntityResolver('Scmbenecode'),

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

            scmbenecodediagcategories: {
                type: new GraphQLList(getType('Scmbenecodediagcategory')),
                description: 'Scmbenecodediagcategories belonging to this Scm',
                resolve: getEntityResolver('Scmbenecodediagcategory'),

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

            servicecatauditdetails: {
                type: new GraphQLList(getType('Servicecatauditdetail')),
                description: 'Servicecatauditdetails belonging to this Scm',
                resolve: getEntityResolver('Servicecatauditdetail'),

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

registerType(ScmType);
module.exports = ScmType;