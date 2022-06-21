#!/usr/bin/osascript

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Finder -> VSCode
# @raycast.mode silent

# Optional parameters:
# @raycast.icon ?????

# Documentation:
# @raycast.description Open current Finder folder in VSCode
# @raycast.author Fran Grgic
# @raycast.authorURL https://github.com/fgrgic

if application "Finder" is not running then
  log "Finder not running"
end if

tell application "Finder"
  set pathList to (quoted form of POSIX path of (folder of the front window as alias))
end tell

tell application "System Events"
  do shell script "code " & pathList
end tell
