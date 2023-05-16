#!/bin/bash

BLUE="\e[1;34m"
RED="\e[1;31m"

NC="\e[0m"

printf "${BLUE}--==<[ Theme Preview ]>==--${NC}\n"
printf "This script starts the application on port ${RED}8080${NC} and generates a link, to preview the theme easily.\n"
printf "It also generates a ${RED}<tr>${NC} tag, so you can paste it inside the ${RED}THEMES.md${NC} file.\n\n"

read -p "theme name > " THEME

VERCEL_BASE="https://github-readme-tech-stack.vercel.app/api/cards"
BASE="http://localhost:3000/api/cards"
PARAMS="?theme=${THEME}&title=${THEME}&lineCount=1&line1=typescript,typescript,auto;express,express.js,61DAFB"

LINK="${BASE}${PARAMS}"
LINE="\n\e]8;;${LINK}\e\\[Click here]\e]8;;\e\\n"

echo -e $LINE

printf "\<tr>\n"
printf "  <td align=\"center\"><code>${THEME}</code></td>\n"
printf "  <td>\n"
printf "    <img src=\"${VERCEL_BASE}${PARAMS}\">\n"
printf "  </td>\n"
printf "</tr>\n\n"

case "$OSTYPE" in
  darwin*)  open $LINK ;; 
  linux*)   xdg-open $LINK ;;
  msys*)    start $LINK ;;
  cygwin*)  start $LINK ;;
esac

printf "${NC}The app is running on port ${RED}8080${NC}.\n"
printf "${NC}Press ${RED}ctrl+c${NC} to exit.\n"
npm run dev -- --quiet >&-
