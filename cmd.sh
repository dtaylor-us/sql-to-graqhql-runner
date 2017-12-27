#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
DB=$2
PASSWORD=$3
OUT="src"
GRAPHQL_CONTENT_TYPE="application/graphql"
JSON_CONTENT_TYPE="application/json"


destroy_schema() {
  rm -r $DIR"/src"
}

create_schema() {
    sql2graphql --db $DB -p $PASSWORD -o $OUT
}

update_generated_src() {
    echo Updating Generated Project...
    # change content type to accept json not grqphql in generated server.js
    sed -i -e 's~application/graphql~application/json~g' src/server.js
    echo 'Content was set to JSON'

    # copy graphiql template
    cp graphiql-template.html index.html
    # replacing generated index.html file with graphiql template
    mv index.html src/public
    echo 'Graphiql template generated'
}

start() {
    . cd $DIR"/src"
    npm install
    npm start
}

test(){
    return reply(Boom.badRequest(
    sed -i -e 's~application/graphql~application/json~g' src/server.js
} 


case $1 in
    test)
        test
        ;;
    create)
        create_schema
        ;;
    destroy)
        destroy_schema
        ;;
    start)
        start
        ;;
    update)
        destroy_schema
        create_schema
        update_generated_src
        ;;

    
    esac
exit 0