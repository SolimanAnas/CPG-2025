# Icon mapping decisions

A complete emoji → Lucide mapping table is in [`mapping-table.md`](./mapping-table.md). This file explains the choices that were not obvious.

## Why some emojis were kept as text

Lucide is monochrome. It cannot represent color, so any emoji whose meaning depends on its color must remain a literal character. The map has a `lucide: null` entry for each of these:

| Emoji | Reason |
| --- | --- |
| 🟢 green circle | Success / correct status — the color *is* the message |
| 🟡 yellow circle | Warning status — color = meaning |
| 🔴 red circle | Error status — color = meaning |
| 🔵 blue circle | Info / selected — color = meaning |
| 🟠 orange circle | Used for high-priority pills |
| 🟧 🟨 🟩 colored squares | Used in checklists and progress dots |
| ⬛ ⬜ black / white square | Toggles and theme indicators |
| ☐ ballot box | Empty checkbox glyph |
| © | Copyright symbol, not an icon |
| € | Euro sign, not an icon |

## Where Lucide had no exact match

Lucide covers a lot, but medical and special-purpose icons are sparse. Where there was no direct match, I picked the closest fit and noted the choice in the mapping JSON.

| Emoji | Wanted | Used | Why this fallback |
| --- | --- | --- | --- |
| 🫁 lungs | `lungs` doesn't exist | `wind` | "Breathing" is the conceptual match; visually it's three wind lines, used in airway-management chapters. A real lungs icon would be more accurate. |
| 🤰 pregnant woman | `pregnant` doesn't exist | `baby` | Medical context uses a baby icon as the closest available. Acceptable, but a custom icon would be better. |
| 🚁 helicopter | `helicopter` doesn't exist | `plane-takeoff` | Used in dispatch / trauma contexts. Plane is the closest "rotary/fixed-wing aircraft" Lucide offers. |
| 📊 bar chart | `bar-chart-3` doesn't exist in 0.469.0 | `chart-no-axes-column` | Lucide renamed it. The chosen icon shows three vertical bars without axes — visually almost identical to the emoji. |
| 🫙 jar | `jar` doesn't exist | `container` | Used in the medication formulary. Container is a box-like shape — close enough for "container of medicine". |
| 🧸 teddy bear | `teddy` doesn't exist | `smile` | Used on PEPP (pediatric) pages. Smile at least conveys "child-friendly". A custom teddy SVG would be a quick improvement. |
| ⏯ play-pause | `play-pause` doesn't exist | `play` | Used in one place. Lost the dual glyph; functional, but a CSS-stacked `play` + `pause` would be better. |
| ⎙ print symbol | `print` icon exists, but no plain `⎙` equivalent | `printer-check` | Used in the iOS PWA install banner. Printer-check reads as "print confirmation" which matches the context. |
| ⚰ coffin | `coffin` doesn't exist | `skull` | Used on the verification-of-death chapter. Skull is more universal and less morbid. |
| ℹ / ℹ️ info | `info` exists but reads differently | `circle-help` | Circle with a question mark, the conventional help/info glyph. |

## Multi-codepoint emojis

Some emoji sequences in the source files are composed of two or three codepoints. The mapping table includes both forms when they appear:

| Form | Codepoints | Mapped to |
| --- | --- | --- |
| `☀` | U+2600 | `sun` |
| `☀️` | U+2600 U+FE0F | `sun` |
| `❤` | U+2764 | `heart` |
| `❤️` | U+2764 U+FE0F | `heart` |
| `ℹ` | U+2139 | `circle-help` |
| `ℹ️` | U+2139 U+FE0F | `circle-help` |

The replacement regex sorts by length descending so the longer variants match first; the bare `☀` and `❤` only fire if the variation-selector form wasn't present.

## Decorative sequences

Three composite sequences appear once each, used as text decoration inside quiz content rather than as icons:

| Sequence | Where | Decision |
| --- | --- | --- |
| `⚡😭😭😭😭😭` | one place | Kept as text |
| `⚡✅` | one place | Kept as text |
| `🤔🤔🤔🤔🤔🤔🤔🤔🤔` | one place | Kept as text |

They live inside exam question/answer strings in JSON files, not in any HTML/JS that the renderer treats as icon markup, so swapping them for SVG sprites would have required changes to the data layer for zero UI benefit.

## Icons added in the sprite but not present in the source

The sprite currently contains 122 symbols, and the source uses 121 unique symbols across all files. The extra one (`circle-check-big` referenced by an SVG `use` that was added during testing) is harmless and kept in case it's needed later.

To shrink the sprite to exactly what the source uses, rerun `build_sprite.py` after editing the mapping or after a fresh scan of the repo for `sprite.svg#<name>` references.

## Color emojis vs Lucide alternatives

For the color status indicators (`🟢 🟡 🔴 🔵`), an obvious alternative would have been Lucide's colored variants like `circle-check`, `circle-x`, etc. The reason we kept the emoji is that the **emojis carry their own color**, while Lucide's variants are single-tone and need explicit color CSS to mean anything. Replacing `🟢` with `circle-check` would visually lose the "green" — it would just become a generic check mark, indistinguishable from a black one. Same for the other color shapes. The emoji is the better choice here.
