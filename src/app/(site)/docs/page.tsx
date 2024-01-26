import SidebarLink from "@/components/Docs/SidebarLink";
import { getAllPosts } from "@/libs/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs | Rose Development - Next.js Template for Rose Developments",
  description: "This is Docs page for Rose Development",
  // other metadata
};

export default function DocsPage() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  return (
    <>
      <section className="pb-16 md:pb-20 lg:pb-24 pt-24 md:pt-28 lg:pt-32">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] p-4 rounded-lg transition-all bg-white/5">
                <ul className="space-y-2">
                  {posts.map((post, key) => (
                    <SidebarLink post={post} key={key} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details bg-white/5 rounded-lg py-11 px-8 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h5>Welcome to our Client List</h5>
                <h6>Founded in 2020</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
