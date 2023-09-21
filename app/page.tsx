import BlogDirector from "./components/blog Director/blogDirector";
import Members from "./components/members/Members";
import Service from "./components/services";
import Slogan from "./components/slogan";
import Vision from "./components/vision";

export default function Home() {
  return (
    <main className="homePage">
      <Slogan/>
      <Vision/>
      <Service/>
      <BlogDirector/>
      <Members/>
    </main>
  )
}
