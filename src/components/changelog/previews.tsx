import {
  IconBinary,
  IconCopy,
  IconCopyPlus,
  IconDeviceFloppy,
  IconDownload,
  IconLink,
  IconX,
} from '@tabler/icons-react'
import type { ComponentType } from 'react'

import {
  AppBar,
  Bar,
  Barcode,
  BeforeAfter,
  Code,
  Figure,
  Ink,
  Label,
  NewTab,
  PanelHeader,
  Shot,
  Tab,
  Tool,
} from './kit'
import { m } from '#/paraglide/messages'

// One picture per release, keyed by its version in CHANGELOG.md. Releases
// that only touched tooling or docs have none.

const SHIPPING = [
  '^XA',
  '^FX Ship to',
  '^FO50,60^A0N,40^FDMaya Chen^FS',
  '^FO50,110^A0N,28^FD4821 Rue Saint-Denis^FS',
  '^FO50,200^BCN,120^FD123456789012^FS',
  '^XZ',
]

function ShippingLabel() {
  return (
    <Label>
      <Ink className="w-3/4" />
      <Ink className="h-1 w-1/2" />
      <Ink className="h-1 w-2/3" />
      <Barcode className="mt-3" />
      <Ink className="mt-auto h-1 w-1/3" />
    </Label>
  )
}

function Editor() {
  return (
    <Shot>
      <PanelHeader title="shipping.zpl" />
      <div className="grid sm:grid-cols-[minmax(0,1fr)_auto]">
        <Code lines={SHIPPING} marks={{ 2: 'active' }} />
        <ShippingLabel />
      </div>
    </Shot>
  )
}

function toolbar(last: ComponentType) {
  const Last = last
  return (
    <PanelHeader title="shipping.zpl">
      <Tool>
        <IconCopy />
      </Tool>
      <Tool>
        <IconBinary />
      </Tool>
      <Tool>
        <IconLink />
      </Tool>
      <Tool>
        <IconDownload />
      </Tool>
      <Tool highlight>
        <Last />
      </Tool>
    </PanelHeader>
  )
}

function CloseTab() {
  return <BeforeAfter before={toolbar(IconCopyPlus)} after={toolbar(IconX)} />
}

function DiskFile() {
  return (
    <Shot>
      <AppBar>
        <Tab name="sample.zpl" />
        <Tab
          name="shipping.zpl"
          active
          icon={
            <IconDeviceFloppy className="size-3.5 shrink-0 text-muted-foreground" />
          }
        />
        <NewTab />
      </AppBar>
      <Code lines={SHIPPING.slice(0, 3)} />
    </Shot>
  )
}

function VersionLink() {
  return (
    <Shot>
      <AppBar>
        <Tab name="shipping.zpl" active />
        <Tab name="returns.zpl" />
        <NewTab />
        <span className="ml-auto px-1.5 font-mono text-[11px] text-foreground underline ring-1 ring-selection">
          {m.app_version({ version: '0.35.0' })}
        </span>
      </AppBar>
      <div className="grid gap-2 p-4">
        <Bar className="w-1/3" />
        <Bar className="w-1/2" />
      </div>
    </Shot>
  )
}

/** Wraps a release's pictures in one inert figure. */
function figure(...parts: ComponentType[]): ComponentType {
  return function Preview() {
    return (
      <Figure>
        {parts.map((Part, i) => (
          <Part key={i} />
        ))}
      </Figure>
    )
  }
}

export const previews: Record<string, ComponentType> = {
  '0.35.0': figure(VersionLink),
  '0.33.0': figure(DiskFile),
  '0.32.0': figure(CloseTab),
  '0.3.0': figure(Editor),
}
