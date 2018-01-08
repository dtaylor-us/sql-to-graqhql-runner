#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
DB=$2
PASSWORD=$3
OUT=$4
GRAPHQL_CONTENT_TYPE="application/graphql"
JSON_CONTENT_TYPE="application/json"

destroy_schema() {
  rm -r $DIR"/src"
}

create_schema() {
    sql2graphql --db $DB -p $PASSWORD -o "src"
}

demo() {
    rm -r $DIR"/demo"
    sql2graphql --db $DB -p $PASSWORD -o demo
    . cd $DIR"/demo"
    npm install
    npm start
}

update_generated_src() {
    echo 'Project: Updating Generated Project...'
    
    # change content type to accept json not grqphql in generated server.js
    echo 'Project: setting content type to JSON'
    sed -i -e 's~application/graphql~application/json~g' src/server.js
    
    echo 'Project: Generating Graphiql template'
    # copy graphiql template
    cp graphiql-template.html index.html
    # replacing generated index.html file with graphiql template
    mv index.html src/public

    echo 'Project: Removing unecessary return statement from handlers/graphql.js'
    # remove return statement from handlers/graphql.js
    sed -i src/handlers/graphql.js -re '13,15d'

    # update graphql dependencey to versiongraph-I-ql is using
    echo 'Project: Udating graphql version in package.json to 0.1.1'
    . cd $DIR"/src"
    npm install --save graphql@0.12.3
}

start() {
    . cd $DIR"/src"
    npm install
    npm start
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
    demo)
        demo
        ;;

    esac
exit 0