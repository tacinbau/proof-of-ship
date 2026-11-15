# LAUNCH-RUNBOOK — makefun-coin-promo-01 ("Proof of Ship" / SHIP)

**Status: PREP ONLY. No coin has been launched. No SOL has been spent.
Nothing in this runbook is executed until BOTH gates below are met.**

## 0. The two gates — both must be true before any launch step

- (a) The agent wallet holds **≥ 0.05 SOL** on Solana mainnet. The user
  tops it up; the agent never asks for a seed phrase or private key.
  Current balance (verified 2026-11-15 ~12:50 WIB): **0 SOL** — this is
  why no launch happens in the prep session.
- (b) The user gives a **separate explicit go for this exact launch**
  (name, ticker, cost estimate in this runbook). A "gas" for the prep
  is NOT a go for the launch.

If either gate is unmet, stop here. Do not launch, do not build a
transaction, do not spend anything.

## 1. The coin (exact metadata — use character for character)

- **Name:** Proof of Ship
- **Ticker:** SHIP
- **Website:** https://make.fun/bounty/makefun-coin-promo-01
- **Logo:** `logo.png` in this repo (1600×1600 PNG, 0.4 MiB, ghost riding
  an orange rocket on plain green). Upload it exactly as it is.
- **Description** (token metadata, plain text — pump.fun shows it as
  plain text, so the URL must be the full `https://` URL):

```
No roadmap. No promises. Just shipped code — and a public score.

Proof of Ship is the coin for the agents that actually ship. make.fun is a site where people and their AI agents build programs, enter them in paid competitions (bounties) and are scored and ranked in the open — SHIP is the receipt for work that was built, entered and judged in public.

Made for the make.fun bounty: https://make.fun/bounty/makefun-coin-promo-01
```

- **Supply / decimals / curve:** pump.fun's fixed ones (1B supply,
  6 decimals, platform-controlled bonding curve). The creator controls
  only name, symbol, image and description.
- **First buy:** 0 SOL. **Priority fee / Jito tip:** none unless
  separately approved. **Trading:** none planned.

## 2. Launch wallet

- **Agent wallet (launch from this one):**
  `ExeVv1nUTvo4VNRdmqVrcWBrHAaH69bnELc7qpaPw8d1` — the make.fun agent
  wallet (keypair `~/.makefun/keypairs/https_make.fun.json`, mode 600).
  Never copy, print or share the secret key; only the public address
  above may be used. The create transaction must be signed by, or name
  as its creator, a wallet linked to the make.fun account — this wallet
  is that wallet.
- The user's phone Phantom `AMt8JoMHQxEneuwBLcFcs2t61D7fahAftoB9CmTQUJSR`
  can NOT be signed by the agent. Do not launch from it.
- **Chain:** Solana **mainnet-beta**. Devnet is NOT valid — the house
  looks the mint up on pump.fun, which is mainnet-only.

## 3. Cost estimate — label: ESTIMATE, not a quote

From the earlier coin-launch-01 prep (same pump.fun create, 14 Nov 2026
figures; SOL was ~$78 then — SOL is volatile, the SOL figures are the
binding ones):

| Item | SOL | Refundable? |
| --- | --- | --- |
| pump.fun platform creation fee | 0.02 | No |
| Rent — mint + metadata + bonding-curve accounts | ~0.012–0.015 | Locked while the coin exists (treat as spent) |
| Network transaction fee (1 signature) | 0.000005 | No |
| First buy | 0 | n/a |
| **TOTAL all-in** | **~0.02–0.035 SOL** | — |
| of which non-refundable (fee + tx fee) | ~0.020005 SOL | No |

The launch session re-reads the live figures on chain before signing
(`getMinimumBalanceForRentExemption` etc.). **If the live total exceeds
0.05 SOL, the launch stops and the user is asked again.** Keep ~0.0035 SOL
in the wallet afterwards for a possible prize claim (claim transaction
cost, only if the entry wins).

## 4. Launch procedure (executed ONLY after both gates in §0)

1. **Pre-flight (read-only, no spend).** Confirm the window is open
   (opened 2026-11-15 13:00 WIB, closes 2026-11-17 13:00 WIB);
   confirm the agent wallet holds ≥ 0.05 SOL on mainnet; confirm
   Node 22.18+; confirm `logo.png` is the file in this repo.
2. **Create the coin on pump.fun** (mainnet) from the agent wallet,
   with the exact metadata in §1, 0 SOL first buy, no priority fee.
   The parent agent runs the launch (live-browser pump.fun route or
   the equivalent it arranges); the launch wallet signs. Record the
   mint address and the create transaction's signature from the
   transaction receipt — copy them character for character, never
   retype or guess.
3. **Verify on chain before touching LAUNCH.json.** Look the mint up
   on pump.fun and a Solana explorer: the create signature must be the
   transaction that created that mint; the block time must be inside
   the window; the metadata description must contain
   `make.fun/bounty/makefun-coin-promo-01`; the website must be
   exactly `https://make.fun/bounty/makefun-coin-promo-01`; the logo
   must be this repo's `logo.png`. Any mismatch: stop, report, do not
   submit.
4. **Fill in LAUNCH.json** with the two real values:
   `mint` (base58, 32–44 chars) and `create_signature` (base58,
   64–88 chars). No time, price or market value goes in the file.
5. **Run the program the grader way** and confirm `out/LAUNCH.json`
   is byte for byte the repo's `LAUNCH.json`:
   `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
6. **Commit** the filled-in LAUNCH.json (and this runbook, updated with
   the real name/ticker/mint/signature and the actual SOL spent).
7. **Check + submit** — handled by the parent agent (repo creation via
   browser, after the opening; bundle the transcripts of the prep AND
   launch sessions):
   - `node cli/makefun.mjs check --kit . --repo <repo> --transcripts transcripts.tar.gz` (from the kit's directory)
   - `node cli/makefun.mjs submit --competition makefun-coin-promo-01 --repo-url https://github.com/<owner>/<repo> --commit <sha> --title "Proof of Ship" --bundle transcripts.tar.gz --keypair wallet.json`
   Last submission before the deadline is the final entry. Max 5
   submissions/day, 10 total.

## 5. Hard prohibitions

- No mint, no transaction and no SOL spent until BOTH gates in §0 are
  met. The placeholders in `LAUNCH.json` are never replaced with a
  guessed, fake or devnet value.
- No seed phrase or private key is ever requested, pasted, or stored.
- No first buy, priority fee, Jito tip, or trading unless separately
  approved — each is its own decision, not implied by approving the
  launch.
- No submission of this entry while `LAUNCH.json` still holds
  placeholders: the gate refuses it (valid 0) and the house refuses
  the coin at intake.
- The coin's price, market value and trading are never judged; do not
  trade it to "help" the entry.
