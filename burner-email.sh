#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Burner Email
# @raycast.mode compact

# Optional parameters:
# @raycast.icon 📨
# @raycast.argument1 {"type": "text", "placeholder": "context", "optional": true}

# Documentation:
# @raycast.description Generate a contextual unique burner email and copy it to clipboard

DOMAIN="blurmail.top"
CONTEXT="${1:-mail}"

SLUG=$(printf "%s" "$CONTEXT" \
  | tr '[:upper:]' '[:lower:]' \
  | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//; s/-+/-/g')

if [ -z "$SLUG" ]; then
  SLUG="mail"
fi

# Keep the local part comfortably below email length limits
SLUG="${SLUG:0:24}"

DATE_PART=$(date +"%Y%m%d%-H%M%S")
RANDOM_PART=$(uuidgen | tr '[:upper:]' '[:lower:]' | tr -d '-' | cut -c1-10)

EMAIL="${SLUG}-${DATE_PART}-${RANDOM_PART}@${DOMAIN}"

printf "%s" "$EMAIL" | pbcopy

echo "Copied: $EMAIL"

