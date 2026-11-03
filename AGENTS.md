# Repository instructions

- Commit your completed changes before handing the task back to the user. Run appropriate checks first, and include only changes belonging to your task. Do not leave completed work uncommitted unless the user explicitly asks you to.
- For design, always refer to https://vercel.com/design.md.
- Always use the appropriate TanStack libraries for functionality they cover, and follow the official TanStack documentation, recommended patterns, and best practices.
- Always use shadcn/ui and Tailwind CSS for the user interface and styling.
- Before building a UI component, check whether shadcn/ui provides an appropriate component. If it does, install that component through the shadcn CLI and use it instead of creating a custom replacement.
- Extend and customize shadcn/ui components with the project's Tailwind conventions while preserving their intended structure, accessibility, and behavior.

## Versioning

- Every commit bumps `version` in `package.json` and adds an entry at the top of `CHANGELOG.md` in the same commit: `## [x.y.z] - YYYY-MM-DD`, then `### Added`, `### Changed` or `### Fixed` with short user-facing bullets.
- Major for breaking changes to stored labels, share links or file formats; minor for new features and visible behavior changes; patch for fixes, refactors, docs and tooling.
- If several commits go out together, each still gets its own version and entry.
- A release that changes something users can see also gets a picture on the changelog page: add its version to `previews` in `src/components/changelog/previews.tsx`. Use a `BeforeAfter` pair when it changes something that existed, a single `Shot` when it adds something new. Build it from the parts in `src/components/changelog/kit.tsx` (`Code`, `Label`, `AppBar`, `PanelHeader`…), keep it small and static, and reuse existing `m.*` labels. Tooling, docs and refactor releases get none. `previews.test.ts` fails if a preview's version isn't in `CHANGELOG.md`.
- `src/lib/version.test.ts` fails if the newest changelog entry doesn't match `package.json`.

## Finishing a task (required, not optional)

A task is not done until every step below is complete. Do them yourself, without being asked, and don't end your turn with uncommitted work.

1. Bump `version` in `package.json` (major/minor/patch as above).
2. Add the matching `## [x.y.z] - YYYY-MM-DD` entry at the top of `CHANGELOG.md`, with today's date. If the change is visible, add its changelog preview (see Versioning) and check it in light and dark.
3. Run `bun run check`, `bun run lint`, `bun run typecheck` and `bun run test`; fix anything that fails.
4. Commit only the files for this task with a concise imperative subject (≤72 chars) and a body explaining what changed and why.
5. In your final message, report the new version and the commit hash.
