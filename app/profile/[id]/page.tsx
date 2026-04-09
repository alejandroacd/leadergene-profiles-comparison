import { getCandidateById, CANDIDATES } from "@/lib/data";
import { notFound } from "next/navigation";
import { ProfileView } from "./ProfileView";

export function generateStaticParams() {
  return CANDIDATES.map((c) => ({ id: c.id }));
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const candidate = getCandidateById(id);

  if (!candidate) {
    notFound();
  }

  return <ProfileView candidate={candidate} />;
}
