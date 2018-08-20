#!/bin/bash

curl "http://localhost:4741" \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
  firsts: {
      "smile": "'"${SMILE}"'",
      "laugh": "'"${LAUGH}"'",
      "roll_over": "'"${ROLLOVER}"'",
      "sitting_up": "'"${SITTINGUP}"'",
      "tooth": "'"${TOOTH}"'",
      "kisses": "'"${KISSES}"'",
      "crawling": "'"${CRAWLING}"'",
      "foods": "'"${FOODS}"'",
      "standing": "'"${STANDING}"'",
      "waving": "'"${WAVING}"'",
      "walking": "'"${WALKING}"'",
      "words": "'"${WORDS}"'",
      "mama_dada": "'"${MAMADADA}"'",
      "haircut": "'"${HAIRCUT}"'",
      "birthday": "'"${BIRTHDAY}"'",
      "other": "'"${OTHER}"'"
    }
  }'

echo
