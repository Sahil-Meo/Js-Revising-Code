import FirstButton from "../../Components/Buttons/FirstButton";

const Hero = () => {
     return (
          <div className="w-full sm:h-[85vh] h-[70vh] border bg-cover bg-center flex items-center p-5 sm:p-20 justify-end" style={{backgroundImage:"url(/img/hero-bg.png)"}}>

               <div className="max-w-[650px] block max-h-[443px] p-8 bg-[#FFF3E3] rounded-lg shadow">
                    <div className="pt-8">
                         <span className=" text-primary font-semibold text-sm lg:text-base tracking-[3px] pb-2 pt-6">
                              New Arrival
                         </span>
                         <h1 className="font-bold text-3xl lg:text-6xl text-ochre pb-4 pt-2">
                              Discover Our <br />
                              New Collection
                         </h1>
                         <p className=" text-secondary lg:text-lg font-medium pb-8 lg:pb-12">
                              Here are the biggest enterprise technology acquisitions of 2021 so
                              far, in reverse chronological order.
                         </p>
                         <FirstButton label={'Buy Now'} path={'/shop'} />
                    </div>
               </div>
          </div>
     );
};

export default Hero;
