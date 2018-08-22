#!/bin/bash

curl --include --request GET "http://localhost:4741/memories/${ID}" \
 --header "Content-Type: application/json" \
 --header "Authorization: Token token=${TOKEN}" \
