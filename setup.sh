#!/bin/zsh

# Run this from terminal, not from raycast

# Raycast looks for node in /usr/bin/env
# But if you are, for example, using nvm, it's located in a different place
# That's why this script looks for where node is installed
# And replaces all .js files to start with local node location

node_location=$(where node)

for f in *.js; do
  tail -n +2 "$f" > "$f.tmp" && mv "$f.tmp" "$f"
  echo -e "#!$node_location\n$(cat $f)" > $f
done
