#!/bin/bash

curl "http://localhost:4741/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    memory: {
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
