#!/bin/bash
# Stop hook for personal-site.
# Ralph loop (MARVIN_ISSUE set): hard block if bead not closed.
# Manual session: warn about in-progress beads, but allow stop.

export PATH="$PATH:/c/Users/Ulyss/AppData/Local/Programs/bd:/home/ulyss/.local/bin"
export BEADS_DIR=/c/Users/Ulyss/Documents/marvin/.beads

PROJECT_LABEL="personal-site"

# --- Ralph loop gate (hard block) ---
if [ -n "$MARVIN_ISSUE" ]; then
  STATUS=$(bd show "$MARVIN_ISSUE" --json 2>/dev/null \
    | python3 -c "import json,sys; print(json.load(sys.stdin)[0]['status'])" 2>/dev/null)

  if [ "$STATUS" != "closed" ]; then
    echo "{\"decision\":\"block\",\"reason\":\"Issue $MARVIN_ISSUE is not closed (status: ${STATUS:-unknown}). Close it with: bd close $MARVIN_ISSUE\"}"
    exit 1
  fi
fi

# --- Manual session: warn about in-progress beads, don't block ---
IN_PROGRESS=$(bd list --label "$PROJECT_LABEL" --status in_progress --json 2>/dev/null)
COUNT=$(echo "$IN_PROGRESS" | python3 -c "import json,sys; data=json.load(sys.stdin); print(len(data))" 2>/dev/null || echo "0")

if [ "$COUNT" != "0" ] && [ "$COUNT" != "" ]; then
  TITLES=$(echo "$IN_PROGRESS" | python3 -c "
import json,sys
data = json.load(sys.stdin)
for d in data:
    print(f'{d.get(\"id\",\"?\")}: {d.get(\"title\",\"?\")}')
" 2>/dev/null)
  echo "{\"decision\":\"approve\",\"systemMessage\":\"$COUNT personal-site bead(s) still in progress. Before stopping: comment progress with bd comment <id>, or close if done. Open beads: $TITLES\"}"
  exit 0
fi

# --- Knowledge capture nudge (bead-close aware) ---
CONTEXT=$(cat)

BEAD_CLOSED=$(echo "$CONTEXT" | grep -ciE "bd close|bead.*closed|closed.*bead" || true)
BD_REMEMBER=$(echo "$CONTEXT" | grep -ciE "bd remember" || true)
STRONG_PATTERNS="fixed|workaround|gotcha|that.s wrong|check again|we already|should have|discovered|realized|turns out|my bad|actually no|correction|was wrong|stale|outdated|that.s not right"

if [ "$BEAD_CLOSED" -gt 0 ] && [ "$BD_REMEMBER" -eq 0 ]; then
  echo '{"decision":"approve","systemMessage":"A bead was closed this session but no bd remember was called. If cross-cutting knowledge was produced, distill it now: bd remember \"<key>: <rule>\". If nothing worth remembering, proceed."}'
elif echo "$CONTEXT" | grep -qiE "$STRONG_PATTERNS"; then
  echo '{"decision":"approve","systemMessage":"This turn had a correction or discovery. If something non-obvious was learned, write it now: bd remember \"<key>: <rule>\". Do not wait for session end."}'
else
  echo '{"decision":"approve"}'
fi
