#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Open Node
# @raycast.mode silent

# Optional parameters:
# @raycast.icon 👨‍💻

# Documentation:
# @raycast.description Open a terminal window with node shell
# @raycast.author Fran Grgic
# @raycast.authorURL @fgrgic

osascript -e 'tell app "Terminal"
    do script "node"
end tell'

