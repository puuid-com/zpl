# Changelog

Every change bumps `version` in `package.json` and adds an entry here, newest first. The version shows in the editor's top bar and links to the changelog page.

- **Major**: breaking changes to stored labels, share links or file formats.
- **Minor**: new features and visible behavior changes.
- **Patch**: fixes, refactors, docs and tooling.

Visible changes also get a picture on the changelog page: add the version to `previews` in `src/components/changelog/previews.tsx`.

## [0.35.0] - 2026-11-02

### Added

- A changelog page lists every release, newest first. The version in the top bar links to it.

## [0.34.0] - 2026-10-27

### Added

- Ctrl/Cmd+S saves a file opened from disk right away, instead of opening the browser's Save Page dialog. It works from inside the editor too.

## [0.33.1] - 2026-10-27

### Fixed

- Changing a label setting to the value it already has no longer saves the file again.

## [0.33.0] - 2026-10-27

### Added

- Open `.zpl` files from disk. Edits are written back to the file, and changes made to it in other programs show up in the editor.
- Disk files show a floppy icon in their tab, panel header and library row. If the browser loses access, the panel header offers Reconnect, or Find file when the file has moved.
- Removing a disk file from the library leaves the file on disk untouched.

## [0.32.0] - 2026-10-27

### Changed

- The panel's last toolbar button closes its tab instead of duplicating the file. The file stays saved, and focus moves to the next tab.

## [0.31.0] - 2026-10-27

### Added

- Links can carry plain base64 ZPL in a `base64` parameter, so other tools can link straight to a label. Optional `dpmm`, `w` and `h` set the label settings.

## [0.30.0] - 2026-10-27

### Changed

- All the labels in a file render from one Labelary request instead of one per label, so long jobs render faster and stay under the rate limit.

## [0.29.0] - 2026-10-27

### Added

- Renders are cached in the browser, so reloading the page doesn't ask Labelary for labels it already drew. The 500 most recent are kept.

## [0.28.3] - 2026-10-26

### Fixed

- Tab close buttons are easier to see and react on hover.

## [0.28.2] - 2026-10-26

### Fixed

- File name fields no longer show the browser's autocomplete suggestions.

## [0.28.1] - 2026-10-26

### Fixed

- Copy and download buttons are disabled while the editor is empty.

## [0.28.0] - 2026-10-26

### Changed

- The empty preview has a clearer title and hint, in muted inset text, with a credit to Labelary.

## [0.27.0] - 2026-10-26

### Changed

- The "Explain code" toggle is gone from the top bar. Hovering a command still explains it.

## [0.26.2] - 2026-10-26

### Fixed

- The Files button no longer shows a tooltip over its own menu.

## [0.26.1] - 2026-10-26

### Fixed

- Buttons whose label already says what they do, such as zoom and tab close, no longer show a tooltip repeating it.

## [0.26.0] - 2026-10-26

### Added

- Files are saved in a library in your browser. Open, rename and delete them from Files, and switch between open files with tabs in the top bar.
- Up to four files can be open at once. Closing a tab keeps the file saved.

## [0.25.1] - 2026-10-26

### Changed

- The project and its Worker are named `zpl`.

## [0.25.0] - 2026-10-26

### Fixed

- Two-finger scrolling on a trackpad scrolls the preview instead of zooming it. Pinch or Ctrl/Cmd+scroll to zoom.

### Added

- With Sync zoom on, scrolling one preview scrolls the others too.

## [0.24.0] - 2026-10-26

### Added

- Zoom a preview by pinching or scrolling over it, keeping the point under the pointer in place.
- A "Sync zoom" toggle in the top bar zooms every preview together once two panels are open.

## [0.23.0] - 2026-10-26

### Changed

- App-wide controls (Explain, Compare, Add panel) live once in a new top bar, and each panel header fits in a single row.
- Narrow panels hide their least used buttons instead of wrapping.

## [0.22.0] - 2026-10-26

### Changed

- Every panel action is a visible button in the header: label size, Explain and Compare, copy ZPL, base64 or share link, PDF, PNG or ZPL downloads, duplicate and close.
- Zoom out, zoom in and Fit are buttons in the status bar.

## [0.21.0] - 2026-10-26

### Changed

- The Explain toggle moved into an options menu at the end of the status bar.

## [0.20.0] - 2026-10-26

### Changed

- With several panels open, each shows its label on top and the code below it.

## [0.19.0] - 2026-10-26

### Changed

- Every preview, export and comparison is rendered by Labelary. Labelary's linter warnings are underlined in the editor.
- The Live/API switch, the Labelary comparison and click-to-code are gone.

## [0.18.0] - 2026-10-24

### Changed

- The sample on first visit is the classic Intershipping shipping label.

## [0.17.0] - 2026-10-24

### Added

- A logo, favicon and app icons, and a preview image when the editor's link is shared.

## [0.16.0] - 2026-10-24

### Added

- Hovering a command explains what it does and what each value means, in dots and inches.
- An Explain toggle adds a plain-language summary at the end of each line.

## [0.15.0] - 2026-10-24

### Added

- A warning in the status bar when the ZPL's `^PW` or `^LL` asks for another label size, with a button to switch to it.

## [0.14.1] - 2026-10-24

### Fixed

- The label size settings override `^PW` and `^LL`, like loading different media in a printer.

## [0.14.0] - 2026-10-24

### Changed

- The status bar holds the preview's controls: the label size opens the settings, and Compare, Zoom and panel actions are menus.

## [0.13.0] - 2026-10-24

### Changed

- Tooltips wait a moment before opening, so they don't flash while moving the pointer.
- The Live and API preview options have icons.

## [0.12.1] - 2026-10-24

### Fixed

- The selected option in a toggle stands out from the one under the pointer.

## [0.12.0] - 2026-10-24

### Changed

- A Live preview / API preview switch in the preview header picks the renderer.

## [0.11.0] - 2026-10-24

### Changed

- Actions no longer announce themselves in toast notifications.

## [0.10.0] - 2026-10-24

### Changed

- The top header is gone: Add panel and the Labelary toggle moved into the panels.
- The page no longer rubber-bands when scrolled past its edge.

## [0.9.2] - 2026-10-24

### Changed

- The app loads less code up front. The renderer and PDF export load when first needed.

## [0.9.1] - 2026-10-24

### Fixed

- Lint and formatting errors in generated components and configs.

## [0.9.0] - 2026-10-24

### Added

- Compare a panel's label with another panel's, side by side or as a difference view.

## [0.8.0] - 2026-10-24

### Added

- Copy a share link that carries the label and its settings. The ZPL stays in the link's fragment, which is never sent to the server.

## [0.7.2] - 2026-10-24

### Changed

- The README describes the ZPL editor.

## [0.7.1] - 2026-10-24

### Changed

- Template leftovers and the unused German locale are removed.

## [0.7.0] - 2026-10-24

### Added

- Downloads ask for a file name first, and ZPL can be downloaded as a file.

## [0.6.0] - 2026-10-24

### Added

- A "Labelary preview" switch draws every preview with Labelary instead of the built-in renderer.

## [0.5.1] - 2026-10-24

### Fixed

- The preview fits the whole label on load, not just its width.

## [0.5.0] - 2026-10-24

### Added

- Compare the preview with Labelary's render, side by side or as an overlay that marks the dots that differ.

## [0.4.1] - 2026-10-24

### Added

- The editor is also served at zpl.puuid.com.

## [0.4.0] - 2026-10-24

### Added

- Several ZPL panels side by side, each with its own label, settings and zoom.

## [0.3.1] - 2026-10-10

### Added

- The editor is served at zpl.odeschenes.dev.

## [0.3.0] - 2026-10-10

### Added

- A ZPL editor with a live label preview. Click a field in the label to jump to its code.
- Pasted or dropped base64 is decoded to ZPL.
- Problems are underlined in the editor, and labels export to PNG or PDF or copy as ZPL or base64.

## [0.2.1] - 2026-10-10

### Added

- Helpers to decode base64 ZPL, render labels and export them.

## [0.2.0] - 2026-10-10

### Changed

- A monochrome theme that follows your system's light or dark mode, with Geist fonts.

## [0.1.0] - 2026-10-10

### Added

- The project, created from the TanStack Start template.
