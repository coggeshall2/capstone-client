#!/bin/bash

curl "http://localhost:4741" \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    favorites: {
      "foods": "'"${FOODS}"'",
      "songs": "'"${SONGS}"'",
      "toys": "'"${TOYS}"'",
      "other": "'"${OTHER}"'"
    }
  }'

echo
