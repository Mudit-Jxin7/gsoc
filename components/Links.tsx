"use client";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  ChatCircle,
  Envelope,
  NewspaperClipping,
  PaperPlane,
  TwitterLogo,
} from "@phosphor-icons/react";

const Links = ({ organization }: any) => {
  return (
    <div className="flex flex-row gap-6">
      <Link href={`${organization.twitter_url}`}>
        <HoverCard>
          <HoverCardTrigger>
            <TwitterLogo size={24} />
          </HoverCardTrigger>
          <HoverCardContent>Twitter</HoverCardContent>
        </HoverCard>
      </Link>

      <Link href={`${organization.mailing_list}`}>
        <HoverCard>
          <HoverCardTrigger>
            <PaperPlane size={24} />
          </HoverCardTrigger>
          <HoverCardContent>Mailing List</HoverCardContent>
        </HoverCard>
      </Link>

      <Link href={`${organization.contact_email}`}>
        <HoverCard>
          <HoverCardTrigger>
            <Envelope size={24} />
          </HoverCardTrigger>
          <HoverCardContent>Contact Email</HoverCardContent>
        </HoverCard>
      </Link>

      <Link href={`${organization.irc_channel}`}>
        <HoverCard>
          <HoverCardTrigger>
            <ChatCircle size={24} />{" "}
          </HoverCardTrigger>
          <HoverCardContent>Communication Channel</HoverCardContent>
        </HoverCard>
      </Link>

      <Link href={`${organization.blog_url}`}>
        <HoverCard>
          <HoverCardTrigger>
            <NewspaperClipping size={24} />
          </HoverCardTrigger>
          <HoverCardContent>Blog</HoverCardContent>
        </HoverCard>
      </Link>
    </div>
  );
};

export default Links;
