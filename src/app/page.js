import Image from "next/image";

export const metadata = {
  title: "A website with two sentances",
  description: "A minimalist approch to web design",
  openGraph: {
    title: "A website with two sentances",
    description: "A minimalist approch to web design",
    type: "website",
    url: "https://test-test-navy-phi.vercel.app/",
    image: ["https://images.unsplash.com/photo-1580212666674-338f3ef99640?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRoZSUyMHZvaWR8ZW58MHx8MHx8fDI%3D"]
  }
}

export default function Home() {
  return (
    <div>
      <h1> This took me a whole hour to make. I had a lot of error messages but I got there in the end, I even styled it using CSS.</h1>
    </div>
  );
}
