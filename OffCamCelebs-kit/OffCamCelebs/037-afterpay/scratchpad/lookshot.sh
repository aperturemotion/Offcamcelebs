#!/bin/bash
# lookshot.sh <dir> : build, capture ~12 dark-stage stills, measure them against the render targets
export HF_CHROME=/opt/pw-browsers/chromium-1243/chrome-linux64/chrome
cd "$(dirname "$0")/.." && node scripts/build.mjs | tail -1 && rm -rf "$1" && node scratchpad/sweep029.mjs frames 40 1860 "${2:-165}" "$1" 0.5 2>&1 | tail -1 && python3 scratchpad/lookmeasure.py "$1" 311-351 754-1003
