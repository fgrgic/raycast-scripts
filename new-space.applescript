#!/usr/bin/osascript

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title New Space
# @raycast.mode silent

# Optional parameters:
# @raycast.icon ???

# Documentation:
# @raycast.description Create a new desktop next to the one you're on right now
# @raycast.author fgrgic
# @raycast.authorURL https://frangrgic.com


on run argv
    do shell script "open -a 'Mission Control'"
    delay 0.2
    tell application "System Events" to click (every button whose value of attribute "AXDescription" is "add desktop") of UI element "Spaces Bar" of UI element 1 of group 1 of process "Dock"
    delay 0.2
    do shell script "open -a 'Mission Control'"
    delay 0.3
    tell application "System Events" to key code 124 using control down
end run
