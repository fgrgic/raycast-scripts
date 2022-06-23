#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Run Screensaver and Mute
# raycast.mode silent
# @raycast.mode compact

# Optional parameters:
# @raycast.icon 🔇

# Documentation:
# @raycast.description Run your screensaver and mute the sound
# @raycast.author Fran Grgic
# @raycast.authorURL @fgrgic

open -a ScreenSaverEngine
osascript -e "set Volume 0"