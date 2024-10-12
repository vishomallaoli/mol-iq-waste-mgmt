import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Index from "@/components/Dashboard";

export const metadata: Metadata = {
  title:
    "MoleculeIQ: a leading drug research platform.",
  description: "This is a description for MoleculeIQ",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Index />
      </DefaultLayout>
    </>
  );
}
