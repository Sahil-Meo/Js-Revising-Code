
const CustomHeading = ({
     isReverse,
     Heading,
     SubHeading,
     paragraph
}) => {
     return (
          <div
               className={`flex ${isReverse ? "flex-col-reverse" : "flex-col "
                    } items-center mb-8 md:mb-12`}
          >
               {Heading && <div className="font-bold text-2xl lg:text-3xl mb-2 leading-normal text-primary">
                    {Heading}
               </div>}
               {SubHeading && <div
                    className=" tracking-wide font-medium text-base lg:text-lg not-italic text-secondary"
               >
                    {SubHeading}
               </div>}
               {paragraph && <div
                    className=" tracking-wide font-normal text-sm md:text-base not-italic text-secondary"
               >
                    {paragraph}
               </div>}
          </div>
     )
}

export default CustomHeading
