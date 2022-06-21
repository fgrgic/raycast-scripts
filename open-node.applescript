#!/usr/bin/osascript

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Open Node
# @raycast.mode silent

# Optional parameters:
# @raycast.icon ?????

# Documentation:
# @raycast.description Open Node shell
# @raycast.author Fran Grgic
# @raycast.authorURL https://github.com/fgrgic

tell application "System Events"
  if not (exists (processes where name is "Terminal")) then
    do shell script "open -a Terminal"
    delay 1
    tell application "Terminal"
      do script ("node") in first window
    end tell
  else
    tell application "Terminal"
      activate
      if (count of windows) is 0 then
        do script ("node")
      else
        tell application "System Events" to tell process "Terminal.app" to keystroke "t" using command down
        delay 1
        do script ("node") in first window
      end if
    end tell
  end if
end tell