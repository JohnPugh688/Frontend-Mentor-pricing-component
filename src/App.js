
import { useState } from "react";
import bgTop from "./images/bg-top.svg"
import bgBottom from "./images/bg-bottom.svg"

function App() {
  const [annually, setAnnually] = useState(false)
  return (
    <>
    <div className="absolute top-0 right-0 -z-10">
      <img className="w-full max-w-full" src={bgTop} alt="topimage" />
    </div>
     <section className="p-5 lg:flex lg:flex-col items-center justify-center lg:h-screen">
      <h1 className="text-center text-slate-500 mb-8 text-4xl">Our Pricing</h1>

      <div class="toggle lg:mb-10">
  <label class="name">Annually</label>
  <input type="checkbox" class="checkbox" id="checkbox" checked={annually} onChange={() => setAnnually(!annually)} />

  <label for="checkbox" class="label">
    <div class="ball"></div>
  </label>

<label class="name">Monthly</label>
</div>


      <div className="flex flex-wrap text-center flex-col justify-center gap-8 max-w-[930px] mx-auto lg:gap-0 lg:flex-row lg:flex-nowrap lg:w-full">
        {/* first article */}
        <article className="p-8 rounded-lg bg-white shadow lg:w-full">
          <h2 className="text-slate-700 text-xl mb-5 ">Basic</h2>
          {annually && <h3 className="text-slate-700 text-5xl flex items-center justify-center "><span className="text-3xl mr-2">$</span> 19.99</h3>}
          {!annually && <h3 className="text-slate-700 text-5xl flex items-center justify-center "> <span className="text-3xl mr-2">$</span> 199.99</h3>}
          <ul className="flex my-8 justify-center flex-col">
            <li className="border-t py-3 text-slate-600 border-slate-300"> 500 GB Storage</li>
            <li className="border-t py-3 text-slate-600 border-slate-300">2 Users Allowed</li>
            <li className="border-y py-3 text-slate-600 border-slate-300">Send up to 3 GB</li>
          </ul>
          <button className="linear-gradient text-white py-2 w-full rounded-lg btn shadow uppercase border-2 cursor-pointer">Learn More</button>
        </article>
        {/* second article */}
        <article className="linear-gradient lg:max-w-[300px]  p-8 rounded-lg shadow lg:w-full lg:scale-110 ">
          <h2 className="text-xl text-white mb-5 ">Professional</h2>
          {annually && <h3 className="text-white text-5xl flex items-center justify-center "><span className="text-3xl mr-2">$</span> 24.99</h3>}
          {!annually && <h3 className="text-white text-5xl flex items-center justify-center "> <span className="text-3xl mr-2">$</span> 249.99</h3>}
          <ul className="flex my-8 justify-center flex-col">
            <li className="border-t py-3 text-white border-slate-300"> 1 TB Storage</li>
            <li className="border-t py-3 text-white border-slate-300">5 Users Allowed</li>
            <li className="border-y py-3 text-white border-slate-300">Send up to 10 GB</li>
          </ul>
          <button className="bg-white text-violet-400 py-2 w-full rounded-lg shadow border-2 border-white uppercase cursor-pointer hover:bg-transparent hover:text-white transition-all duration-200">Learn More</button>
        </article>
        {/* third article */}
        <article className="p-8 rounded-lg bg-white shadow lg:w-full">
          <h2 className="text-slate-700 text-xl mb-5 ">Master</h2>
          {annually && <h3 className="text-slate-700 text-5xl flex items-center justify-center "><span className="text-3xl mr-2">$</span> 39.99</h3>}
          {!annually && <h3 className="text-slate-700 text-5xl flex items-center justify-center "> <span className="text-3xl mr-2">$</span> 399.99</h3>}
          <ul className="flex my-8 justify-center flex-col">
            <li className="border-t py-3 text-slate-600 border-slate-300"> 2 TB Storage</li>
            <li className="border-t py-3 text-slate-600 border-slate-300">10 Users Allowed</li>
            <li className="border-y py-3 text-slate-600 border-slate-300">Send up to 20 GB</li>
          </ul>
          <button className="linear-gradient text-white py-2 w-full rounded-lg btn shadow uppercase border-2  cursor-pointer transition-all duration-200">Learn More</button>
        </article>
      </div>
      <br />
     <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer"
        >Frontend Mentor</a
      >. Coded by <a href="https://github.com/JohnPugh688">John Pugh</a>.
    </div>
     </section>
     
     <div className="absolute left-0 bottom-0 -z-10">
      <img className="w-full max-w-full" src={bgBottom} alt="bottomimage" />
    </div>
    </>
  );
}

export default App;
