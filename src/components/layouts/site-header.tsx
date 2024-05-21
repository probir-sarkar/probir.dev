import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";

import { ModeToggle } from "@/components/layouts/mode-toggle";

export function SiteHeader() {
  return (
    <header className="w-full bg-background pt-4">
      <div className="container flex h-16 max-w-3xl items-center justify-between">
        <Link href="/" className="font-bold">
          {siteConfig.name}
          <span className="sr-only">Home</span>
        </Link>
        <nav className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" className="size-7" asChild>
            <Link href={siteConfig.links.githubProfile} target="_blank" rel="noreferrer">
              <FaGithub className="size-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          {/* <Button variant="ghost" size="icon" className="size-7">
            <Link href={siteConfig.links.x} target="_blank" rel="noreferrer">
              <FaXTwitter className="size-3 fill-current" />
              <span className="sr-only">X</span>
            </Link>
          </Button> */}
          <Button variant="ghost" size="icon" className="size-7">
            <Link href={siteConfig.links.resume} target="_blank" rel="noreferrer">
              <IoDocumentTextSharp className="size-4 fill-current" />
              <span className="sr-only">Resume</span>
            </Link>
          </Button>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
