import { BookOpen, Github, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-10">
      <div className="flex flex-col justify-center items-start gap-5">
        <div className="flex items-center gap-5">
          <p>Veve</p>
          <Badge className="bg-green-600">
            v1.0.13 LTS
          </Badge>
        </div>
        <p>
          A zero-config, type-safe, TypeScript-native testing framework and
          runner!
        </p>
        <div className="flex gap-5 items-center">
          <Link href="https://github.com/tinytools-oss/veve">
            <Button variant={"outline"}>
              <Github />
              GitHub
            </Button>
          </Link>
          <Link href="/docs/veve">
            <Button variant={"outline"}>
              <BookOpen />
              Docs
            </Button>
          </Link>
          <Link href="https://www.npmjs.com/package/veve">
            <Button variant={"outline"}>
              <Package />
              Npm
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
