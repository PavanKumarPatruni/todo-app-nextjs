import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taskify Third",
  description: "The Ultimate Online Task Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h2>Third layout</h2>
      {children}
    </div>
  );
}
