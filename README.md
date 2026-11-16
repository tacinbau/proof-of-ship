[![make.fun · makefun-coin-promo-01](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![rank](https://make.fun/badge/makefun-coin-promo-01/tacinbau/proof-of-ship/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![reward](https://make.fun/badge/makefun-coin-promo-01/tacinbau/proof-of-ship/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)

# Proof of Ship (SHIP) — makefun-coin-promo-01

A real coin on pump.fun that sells make.fun to pump.fun's traders, made for the
make.fun bounty "Launch a coin that sells make.fun" ($1,000, top 50 share it).
An AI judge compares the coins two at a time on creativity, how well they
promote make.fun, and packaging. The coin itself is the entry: the judge sees
it exactly as pump.fun shows it — logo, name, ticker, description, links.

## The coin

- **Name:** Proof of Ship
- **Ticker:** SHIP
- **Website:** https://make.fun/bounty/makefun-coin-promo-01
- **Logo:** `logo.png` — a friendly white ghost (make.fun's mascot spirit) riding
  an orange rocket. One bold subject, strong outline, plain green background,
  readable at thumbnail size. 1600×1600 PNG, 0.4 MiB.
- **Description** (token metadata, first line is the hook):

> No roadmap. No promises. Just shipped code — and a public score.
>
> Proof of Ship is the coin for the agents that actually ship. make.fun is a
> site where people and their AI agents build programs, enter them in paid
> competitions (bounties) and are scored and ranked in the open — SHIP is the
> receipt for work that was built, entered and judged in public.
>
> Made for the make.fun bounty: https://make.fun/bounty/makefun-coin-promo-01

The idea: on make.fun, agents don't promise — they ship programs, enter
bounties, and get scored in the open. SHIP is the receipt for that. make.fun
is the coin's story, not a line pasted at the end.

## Status: PREP ONLY — no coin launched yet

`LAUNCH.json` still holds its two placeholders. The gate refuses placeholders,
which is expected at this stage. The coin is launched later, only after the
agent wallet holds ≥ 0.05 SOL (user tops up) AND the user gives a separate
explicit go for that exact launch. See `LAUNCH-RUNBOOK.md` for the exact
procedure. Nothing has been launched, no SOL has been spent, nothing submitted.

## What the coin must have (from the kit)

- Created on pump.fun at or after the opening (2026-11-15 13:00 WIB) and
  before the deadline (2026-11-17 13:00 WIB), from a Solana wallet linked
  to the make.fun account — the agent wallet
  `ExeVv1nUTvo4VNRdmqVrcWBrHAaH69bnELc7qpaPw8d1`.
- Website exactly `https://make.fun/bounty/makefun-coin-promo-01`.
- Description contains the full URL above, says the coin is for this
  bounty, and explains what make.fun is.
- Logo is this repo's own `logo.png` (≤ 5 MiB, ≤ 16 megapixels).

## Run it the way the grader does

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

It copies `LAUNCH.json` to `out/LAUNCH.json` and prints nothing on success.
`main.ts` is Node 22, standard library only, deterministic: no network, no
wall clock, no files outside the repository.

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this
repository and the transcripts you will upload:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

Then submit, as the kit's `RULES.txt` (Enter) gives it:

    node cli/makefun.mjs submit --competition makefun-coin-promo-01 --repo-url https://github.com/<owner>/<repo> --commit <sha> --title "Proof of Ship" --bundle transcripts.tar.gz --keypair wallet.json

The entry is signed: the wallet that signs it is the one a reward is claimed
to. It must be on your account. At most 5 submissions a day and 10 in all;
your last submission before the deadline is your final entry.
