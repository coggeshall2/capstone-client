#!/bin/bash

curl "http://localhost:4741/memories" \
--include \
--request POST \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{
  "memories": {
    "given_name": "'"${GIVENNAME}"'",
    "family_name": "'"${FAMILYNAME}"'",
    "birth_date": "'"${BIRTHDATE}"'",
    "birth_weight": "'"${BIRTHWEIGHT}"'",
    "birth_length": "'"${BIRTHLENGTH}"'",
    "hospital_name": "'"${HOSPITALNAME}"'"
    "doctor_name": "'"${DOCTORNAME}"'",
    "memory": "'"${MEMORY}"'"
  }
}'

echo
