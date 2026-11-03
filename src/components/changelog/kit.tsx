import { IconChevronDown, IconPlus, IconX } from '@tabler/icons-react'
import type { ReactNode } from 'react'

import { cn } from '#/lib/utils'
import { m } from '#/paraglide/messages'

// Static, inert miniatures of the editor for the changelog. Each preview
// pictures what one release changed, as one shot or a before/after pair.
// They are illustrations: `inert` keeps their controls out of the tab order
// and the accessibility tree, since the bullets already say what changed.

export function Figure({ children }: { children: ReactNode }) {
  return (
    <figure inert className="not-prose mt-6 grid gap-3 select-none">
      {children}
    </figure>
  )
}

function Caption({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[0.6875rem] font-medium tracking-wider text-muted-foreground uppercase">
      {children}
    </span>
  )
}

/** One framed picture, optionally labelled. */
export function Shot({
  label,
  className,
  children,
}: {
  label?: string
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        'grid min-w-0 gap-2',
        label ? 'grid-rows-[auto_1fr]' : 'content-start',
      )}
    >
      {label && <Caption>{label}</Caption>}
      <div
        className={cn(
          'relative min-w-0 overflow-hidden border bg-background text-xs',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}

/** The same spot before and after the release, side by side. */
export function BeforeAfter({
  before,
  after,
  className,
}: {
  before: ReactNode
  after: ReactNode
  className?: string
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <Shot label={m.changelog_before()} className={className}>
        {before}
      </Shot>
      <Shot label={m.changelog_after()} className={className}>
        {after}
      </Shot>
    </div>
  )
}

/* ---------------- Code ---------------- */

/**
 * One line of ZPL coloured like the editor: commands bold, their values
 * muted, ^FD/^FV field data green and ^FX comments italic.
 */
export function zpl(line: string): ReactNode[] {
  return [...line.matchAll(/([\^~].{0,2})([^^~]*)/g)].map(
    ([, command, rest], i) => {
      const code = command.slice(1).toUpperCase()
      return (
        <span key={i}>
          <span className="font-semibold text-foreground">{command}</span>
          <span
            className={cn(
              code === 'FD' || code === 'FV'
                ? 'text-(--syntax-data)'
                : 'text-muted-foreground',
              code === 'FX' && 'italic',
            )}
          >
            {rest}
          </span>
        </span>
      )
    },
  )
}

export type Line = string | ReactNode
export type LineMark = 'add' | 'remove' | 'active'

const MARK: Record<LineMark, string> = {
  add: 'bg-green-500/12',
  remove: 'bg-red-500/12',
  active: 'bg-selection-soft',
}

/** Editor lines with a gutter. Strings go through `format`, nodes as is. */
export function Code({
  lines,
  format = zpl,
  marks = {},
  wrap = false,
  className,
}: {
  lines: Line[]
  format?: (line: string) => ReactNode
  marks?: Partial<Record<number, LineMark>>
  wrap?: boolean
  className?: string
}) {
  return (
    <pre
      className={cn(
        'overflow-hidden py-2 font-mono text-[11px] leading-5',
        className,
      )}
    >
      {lines.map((line, i) => (
        <div key={i} className={cn('flex pr-3', marks[i] && MARK[marks[i]])}>
          <span className="w-8 shrink-0 pr-3 text-right text-muted-foreground/60">
            {i + 1}
          </span>
          <span
            className={cn(
              'min-w-0',
              wrap ? 'wrap-break-word whitespace-pre-wrap' : 'whitespace-pre',
            )}
          >
            {typeof line === 'string' ? format(line) : line}
          </span>
        </div>
      ))}
    </pre>
  )
}

/* ---------------- Chrome ---------------- */

/** The top bar: logo, file tabs, new file, then whatever follows. */
export function AppBar({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-10 min-w-0 items-center gap-1 border-b px-2 whitespace-nowrap">
      <img
        src="/logo.svg"
        alt=""
        width={16}
        height={16}
        className="mr-1 size-4 shrink-0 dark:invert"
      />
      {children}
    </div>
  )
}

/** A file tab as the top bar shows it, underlined when active. */
export function Tab({
  name,
  active,
  icon,
}: {
  name: string
  active?: boolean
  icon?: ReactNode
}) {
  return (
    <div
      className={cn(
        'flex h-7 max-w-40 shrink-0 items-center gap-1.5 border-b-2 pr-1 pl-2',
        active
          ? 'border-foreground bg-muted'
          : 'border-transparent text-muted-foreground',
      )}
    >
      {icon}
      <span className="truncate">{name}</span>
      <IconX className="size-3 shrink-0 text-muted-foreground" />
    </div>
  )
}

export function NewTab() {
  return (
    <span className="flex size-6 shrink-0 items-center justify-center text-muted-foreground">
      <IconPlus className="size-3.5" />
    </span>
  )
}

/** A panel's one-row header: file name, size, then its toolbar. */
export function PanelHeader({
  title,
  size = '4 × 6 in · 203 dpi',
  children,
}: {
  title: string
  size?: string
  children?: ReactNode
}) {
  return (
    <div className="flex h-9 min-w-0 items-center gap-1 border-b pr-1.5 pl-3 whitespace-nowrap">
      <span className="truncate font-medium">{title}</span>
      <span className="flex items-center gap-1 px-1.5 text-muted-foreground tabular-nums">
        {size}
        <IconChevronDown className="size-3" />
      </span>
      <span className="ml-auto flex items-center gap-0.5">{children}</span>
    </div>
  )
}

/** A toolbar icon button, optionally outlined to point it out. */
export function Tool({
  children,
  highlight,
}: {
  children: ReactNode
  highlight?: boolean
}) {
  return (
    <span
      className={cn(
        'flex size-6 items-center justify-center text-muted-foreground [&_svg]:size-3.5',
        highlight && 'text-foreground ring-1 ring-selection',
      )}
    >
      {children}
    </span>
  )
}

/* ---------------- Label ---------------- */

/** A white label on the preview's muted backdrop, like a rendered 4×6. */
export function Label({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div className="flex justify-center bg-muted/60 p-4">
      <div
        className={cn(
          'grid aspect-[4/6] w-28 content-start gap-2 bg-white p-2.5 text-black shadow-sm ring-1 ring-black/10',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}

/** A line of label text, drawn as a black bar. */
export function Ink({ className }: { className?: string }) {
  return <span className={cn('block h-1.5 bg-black', className)} />
}

/** A 1D barcode drawn from a fixed bar pattern. */
export function Barcode({ className }: { className?: string }) {
  const widths = [2, 1, 1, 3, 1, 2, 1, 1, 2, 3, 1, 1, 2, 1, 3, 1, 2, 2, 1, 1]
  return (
    <div className={cn('flex h-8 items-stretch gap-px', className)}>
      {widths.map((width, i) => (
        <span
          key={i}
          className={i % 2 ? 'bg-transparent' : 'bg-black'}
          style={{ flexGrow: width }}
        />
      ))}
    </div>
  )
}

/** A neutral placeholder bar standing in for copy. */
export function Bar({ className }: { className?: string }) {
  return <span className={cn('block h-1.5 bg-muted', className)} />
}
