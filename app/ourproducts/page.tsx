import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
export default function OurProducts() {
  return (
    <section className="grid">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full py-24 bg-mywhite">
          <div className="grid grid-cols-2 w-3/4 mx-auto gap-12">
            <div className="bg-mywhite col-span-1 border-2 border-mygray">
              <h2 className="text-myyellow text-xl">ARC-D7 (HB)</h2>
            </div>
            <div className="col-span-1 w-full">
              <img src="/ARCD7.png" alt="" className="h-52" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
