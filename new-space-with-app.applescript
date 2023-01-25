#!/usr/bin/osascript

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title New Space and App
# @raycast.mode silent

# Optional parameters:
# @raycast.icon ??
# @raycast.argument1 { "type": "text", "placeholder": "App to launch", "optional": true}

# Documentation:
# @raycast.description Create a new desktop next to the one you're on right now and open an application inside it.
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

    if (item 1 of argv) is not "" then
      my launchApplication(item 1 of argv)
    end if
end run

on launchApplication(app_name)
delay 1
    tell application app_name
        launch
    end tell
end launchApplication
