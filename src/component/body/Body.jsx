import Footer from "../footer/Footer";
import Hero from "../heroSection/Hero";
import Nav from "../navBar/Nav";
import StudentTable from "../studentTable/StudentTable";




export default function Body() {
  return (
    <body className="bg-[#172227] font-[Inter] text-white">

    <Nav />
    <Hero />
    <StudentTable />    
    <Footer />
    </body>
  )
}
