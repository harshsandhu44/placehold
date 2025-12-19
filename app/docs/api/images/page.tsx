import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DocsPager } from "@/components/pager";

export default function ImagesApiPage() {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            API Reference
          </div>
          <ChevronRight className="h-4 w-4" />
          <div className="font-medium text-foreground">Images</div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Images API
          </h1>
          <p className="text-lg text-muted-foreground">
            Generate custom placeholder images dynamically.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <section>
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
              Endpoint
            </h2>
            <div className="mt-4 rounded-md bg-muted px-4 py-3 font-mono text-sm">
              GET /api/img
            </div>
          </section>

          <section>
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
              Parameters
            </h2>
            <div className="mt-4 border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Parameter</TableHead>
                    <TableHead>Default</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">w</TableCell>
                    <TableCell className="font-mono">600</TableCell>
                    <TableCell>
                      Width of the image in pixels (16 to 2000).
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">h</TableCell>
                    <TableCell className="font-mono">400</TableCell>
                    <TableCell>
                      Height of the image in pixels (16 to 2000).
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">bg</TableCell>
                    <TableCell className="font-mono">#f3f4f6</TableCell>
                    <TableCell>Background color (Hex code).</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">fg</TableCell>
                    <TableCell className="font-mono">#9ca3af</TableCell>
                    <TableCell>Foreground (text) color (Hex code).</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <section>
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
              Examples
            </h2>
            <Tabs defaultValue="html" className="mt-4">
              <TabsList>
                <TabsTrigger value="html">HTML</TabsTrigger>
                <TabsTrigger value="markdown">Markdown</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              <TabsContent value="html" className="mt-4">
                <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 dark:bg-zinc-900">
                  <code className="text-sm text-zinc-50">
                    {`<img src="https://placehold.harshsandhu.com/api/img?w=800&h=400&bg=000&fg=fff" alt="Placeholder" />`}
                  </code>
                </pre>
              </TabsContent>
              <TabsContent value="markdown" className="mt-4">
                <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 dark:bg-zinc-900">
                  <code className="text-sm text-zinc-50">
                    {`![Placeholder](https://placehold.harshsandhu.com/api/img?w=800&h=400&bg=000&fg=fff)`}
                  </code>
                </pre>
              </TabsContent>
              <TabsContent value="preview" className="mt-4">
                <div className="flex justify-center rounded-lg border bg-muted/50 p-4">
                  <Image
                    src="/api/img?w=400&h=200&bg=000&fg=fff"
                    width={400}
                    height={200}
                    alt="Preview"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </section>
        </div>
        <div className="pt-8">
          <DocsPager slug="/docs/api/images" />
        </div>
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 pt-10">
          <div className="space-y-2">
            <p className="font-medium">On this page</p>
            <ul className="m-0 list-none">
              <li className="mt-0 pt-2">
                <a
                  href="#endpoint"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Endpoint
                </a>
              </li>
              <li className="mt-0 pt-2">
                <a
                  href="#parameters"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Parameters
                </a>
              </li>
              <li className="mt-0 pt-2">
                <a
                  href="#examples"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Examples
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
