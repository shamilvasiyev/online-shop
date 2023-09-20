import classes from "./Blog.module.scss";
import BlogContainer from "./BlogContainer/BlogContainer";

import blogImg1 from "../../Assets/blog/blog1.jpg";
import blogImg2 from "../../Assets/blog/blog2.jpg";

const blogs = [
  {
    id: "1",
    img: blogImg1,
    createdTime: "10 october 2015",
    title: "Mirvari necə yaranır?",
    content:
      "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.",
    link: "https://www.google.com",
  },
  {
    id: "2",
    img: blogImg2,
    createdTime: "10 october 2015",
    title: "Mirvarilər haqqında bilmədikləriniz.",
    content:
      "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.",
    link: "https://www.google.com",
  },
];

const Blog = () => {
  return (
    <section className="section_wrapper">
      <h2 className="section_header_text">From The Blog</h2>
      <div className="margin">
        <BlogContainer blogs={blogs} />
      </div>
    </section>
  );
};

export default Blog;
