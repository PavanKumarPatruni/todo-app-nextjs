import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taskify Second",
  description: "The Ultimate Online Task Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h2>Second layout</h2>
      {children}
    </div>
  );
}
