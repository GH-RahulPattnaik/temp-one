/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaMinus, FaPlus, FaRegUserCircle } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Home() {

  return (
    <div className="dark:text-white text-black">
      {/* Section - 1  */}
      <section className="md:h-full h-lvh w-full relative -z-0 flex flex-col justify-center items-center dark:text-black">
        <img src="/s1/image01.png" alt="image 01" className="w-full md:h-full h-lvh" />
        <div className="flex flex-col items-center justify-center gap-10 absolute z-0 top-40">
          <h6 className="text-center">Only Non-GMO</h6>
          <h4 className="text-center text-6xl">100% Organic</h4>
          <button className="px-16 py-3 bg-gray-900 hover:bg-black text-white rounded-full text-lg">SHOW NOW</button>
        </div>
      </section>

      {/* Section - 2  */}
      <section className="md:px-10 px-4 mt-8">
        <div className="py-10 flex items-center gap-5 md:justify-between flex-wrap">
          <p className="text-3xl font-medium">Best Sellers</p>
          <Link href={"#"} className="underline">View all products</Link>
        </div>

        <div className="max-h-max py-5 flex flex-wrap md:gap-0 gap-8 justify-between cursor-grab text-black">
          <Link href={"#"} className="max-h-max md:max-w-72 max-w-32 md:px-8 px-2 py-4 border border-black flex flex-col items-center rounded-md dark:bg-zinc-800 dark:text-white">
            <img src={"/categories/Apple.png"} alt={"1"}  className="hover:scale-105 duration-200 transition-transform scale-95"/>
            <div className="text-start w-full flex flex-col gap-3 mt-4 h-1/2">
              <h6 className="md:text-lg text-xs font-light">₹110.00</h6>
              <h4 className="font-semibold md:text-2xl text-base ">Apples</h4>
              <p className="text-xs">⭐⭐⭐⭐⭐ (4) </p>
              <h4 className="text-sm">per KG</h4>
              <button className="flex justify-center md:text-base text-sm md:px-5  md:py-3 py-1 text-black hover:bg-black hover:text-white border rounded-full border-black bg-transparent dark:bg-zinc-700  dark:border-white dark:text-white">Buy Now </button>
            </div>
          </Link>
          <Link href={"#"} className="max-h-max md:max-w-72 max-w-32 md:px-8 px-2 py-4 border border-black flex flex-col items-center rounded-md dark:bg-zinc-800 dark:text-white">
            <img src={"/categories/Banana.png"} alt={"2"}  className="hover:scale-105 duration-200 transition-transform scale-95 py-6"/>
            <div className="text-start w-full flex flex-col gap-3 mt-4 h-1/2">
              <h6 className="md:text-lg text-xs font-light">₹50.00</h6>
              <h4 className="font-semibold md:text-2xl text-base ">Banana</h4>
              <p className="text-xs">⭐⭐⭐⭐⭐ (4) </p>
              <h4 className="text-sm">per Dozen</h4>
              <button className="flex justify-center md:text-base text-sm md:px-5  md:py-3 py-1 text-black hover:bg-black hover:text-white border rounded-full border-black bg-transparent dark:bg-zinc-700  dark:border-white dark:text-white">Buy Now </button>
            </div>
          </Link>
          <Link href={"#"} className="max-h-max md:max-w-72 max-w-32 md:px-8 px-2 py-4 border border-black flex flex-col items-center rounded-md dark:bg-zinc-800 dark:text-white">
            <img src={"/categories/Watermelon.png"} alt={"1"}  className="hover:scale-105 duration-200 transition-transform scale-95"/>
            <div className="text-start w-full flex flex-col gap-3 mt-4 h-1/2">
              <h6 className="md:text-lg text-xs font-light">₹70.00</h6>
              <h4 className="font-semibold md:text-2xl text-base ">Watermelon</h4>
              <p className="text-xs">⭐⭐⭐⭐⭐ (4) </p>
              <h4 className="text-sm">per piece</h4>
              <button className="flex justify-center md:text-base text-sm md:px-5  md:py-3 py-1 text-black hover:bg-black hover:text-white border rounded-full border-black bg-transparent dark:bg-zinc-700  dark:border-white dark:text-white">Buy Now </button>
            </div>
          </Link>
          <Link href={"#"} className="max-h-max md:max-w-72 max-w-32 md:px-8 px-2 py-4 border border-black flex flex-col items-center rounded-md dark:bg-zinc-800 dark:text-white">
            <img src={"/categories/maggi.png"} alt={"1"}  className="hover:scale-105 duration-200 transition-transform scale-95"/>
            <div className="text-start w-full flex flex-col gap-3 mt-4 h-1/2">
              <h6 className="md:text-lg text-xs font-light">₹100.00</h6>
              <h4 className="font-semibold md:text-2xl text-base ">Maggi</h4>
              <p className="text-xs">⭐⭐⭐⭐⭐ (4) </p>
              <h4 className="text-sm">per Packet</h4>
              <button className="flex justify-center md:text-base text-sm md:px-5  md:py-3 py-1 text-black hover:bg-black hover:text-white border rounded-full border-black bg-transparent dark:bg-zinc-700  dark:border-white dark:text-white">Buy Now </button>
            </div>
          </Link>
                    
        </div>
      </section>

      {/* Section 3 */}
      <h4 className="md:text-3xl text-xl my-4 mt-20 px-4 md:px-8">Shop fresh food</h4>
      <section className="md:px-8 px-4 flex flex-wrap dark:text-white">
        {/* LEFT */}
        <div className="md:w-2/4 max-w-full">
          <img src="fresh_food.png" alt="food" className="max-h-full w-screen md:rounded-l-3xl md:rounded-tr-none rounded-t-3xl" />
        </div>    
        {/* RIGHT */}
        <div className="md:w-2/4 w-full dark:bg-zinc-900  bg-gray-100 rounded-b-3xl md:rounded-r-3xl md:rounded-l-none">
          <div className="flex justify-center items-center md:h-full gap-4 py-8">
            <Link href={"#"} className="max-h-max md:max-w-80 max-w-28 md:px-8 px-2 py-4 border flex flex-col items-center rounded-md bg-white dark:bg-zinc-700 dark:border-white">
              <img src={"/categories/fruit-salad.png"} alt={"1"} className="h-32 w-32 size-2 hover:scale-105 duration-200 transition-transform"/>
              <div className="text-start w-full flex flex-col gap-3 mt-4">
                <h6 className="md:text-lg text-xs font-light">From ₹80.00</h6>
                <h4 className="font-semibold md:text-2xl text-base ">Fruits Salad</h4>
                <p className="text-xs">⭐⭐⭐⭐ (5) </p>
                <button className="flex justify-center md:text-base text-sm md:px-7 px-2 md:py-3 py-1 bg-white text-black hover:bg-black hover:text-white border rounded-full border-black dark:border-white dark:bg-zinc-800 dark:text-white">Buy Now</button>
              </div>
            </Link>
            <Link href={"#"} className="max-h-max md:max-w-80 max-w-28 md:px-8 px-2 py-4 border flex flex-col items-center rounded-md bg-white dark:bg-zinc-700 dark:border-white">
            <img src={"/categories/veg-salads.png"} alt={"1"} className="h-32 w-32 size-2 hover:scale-105 duration-200 transition-transform"/>
            <div className="text-start w-full flex flex-col gap-3 mt-4">
              <h6 className="md:text-lg text-xs font-light">From ₹100.00</h6>
              <h4 className="font-semibold md:text-2xl text-base ">Veg Salads</h4>
              <p className="text-xs">⭐⭐⭐⭐ (4) </p>
              <button className="flex justify-center md:text-base text-sm md:px-7  md:py-3 py-1 bg-white text-black hover:bg-black hover:text-white border rounded-full border-black dark:border-white dark:bg-zinc-800 dark:text-white">Buy Now</button>
            </div>
          </Link>
          </div>
        </div>        
      </section>

      {/* section 4 */}
      <section className="mt-12 md:px-8 px-4">
        <h2 className="text-2xl">Hot Deals!</h2>
        <div className="w-full flex justify-between gap-4 items-center flex-wrap py-5">
          <div className="md:w-1/4 w-full max-h-max border flex justify-center relative rounded-2xl">
            <img src="categories/organic-breads.png" alt="bread" className="mb-40 rounded-t-2xl"/>
            <div className="absolute flex flex-col justify-center items-center bottom-0">
              <h2>Fresh Everyday</h2>
              <h4 className="py-5 text-2xl">Finest Bread</h4>
              <Link href={"#"} className="w-full px-20 py-2 mb-4 hover:bg-black hover:text-white border dark:border-white border-black rounded-full">Show more</Link>
            </div>
          </div>
          <div className="md:w-1/4 w-full max-h-max border flex justify-center relative rounded-2xl">
            <img src="categories/organic-powders.png" alt="bread" className="mb-40 rounded-t-2xl"/>
            <div className="absolute flex flex-col justify-center items-center bottom-0">
              <h2>Newly arrived!</h2>
              <h4 className="py-5 text-2xl">Masalas</h4>
              <Link href={"#"} className="w-full px-20 py-2 mb-4 hover:bg-black hover:text-white border dark:border-white border-black rounded-full">Show more</Link>
            </div>
          </div>
          <div className="md:w-1/4 w-full max-h-max border flex justify-center relative rounded-2xl">
            <img src="categories/milks.png" alt="bread" className="mb-40 rounded-t-2xl"/>
            <div className="absolute flex flex-col justify-center items-center bottom-0">
              <h2>Collection</h2>
              <h4 className="py-5 text-2xl">Pure Organic</h4>
              <Link href={"#"} className="w-full px-20 py-2 mb-4 hover:bg-black hover:text-white border dark:border-white border-black rounded-full">Show more</Link>
            </div>
          </div>
        </div>
      </section>

      {/* section 5 */}
      <section className="my-14 md:px-8 px-4">
        <div className="py-10 flex items-center gap-5 md:justify-between flex-wrap">
          <p className="text-2xl font-medium">Shop by Category</p>
          <Link href={"#"} className="underline">View all collections</Link>
        </div>
        <div className="flex items-center justify-evenly  gap-6">
          <div className="md:flex hidden flex-col items-center border rounded-xl p-2">
            <img src="categories/bread.png" alt="breads" className="mb-10 h-36 w-36 rounded-xl transition-all duration-500 hover:scale-110" />
            <h3 className="mb-4 text-center hover:underline">Bread & Bakery</h3>
          </div>
          <div className="md:flex flex-col items-center border rounded-xl p-2">
            <img src="categories/mix-fruits.png" alt="mix-fruits" className="mb-10 h-36 w-36 rounded-xl transition-all duration-500 hover:scale-110" />
            <h3 className="mb-4 text-center hover:underline">Fruits</h3>
          </div>
          <div className="md:flex flex-col items-center border rounded-xl p-2">
            <img src="categories/vegetables.png" alt="vegetables" className="mb-10 h-36 w-36 rounded-xl transition-all duration-500 hover:scale-110" />
            <h3 className="mb-4 text-center hover:underline">Vegetables</h3>
          </div>
          <div className="md:flex hidden flex-col items-center border rounded-xl p-2">
            <img src="categories/maggi.png" alt="maggi" className="mb-10 h-36 w-36 rounded-xl transition-all duration-500 hover:scale-110" />
            <h3 className="mb-4 text-center hover:underline">Noodles</h3>
          </div>
          <div className="md:flex hidden flex-col items-center border rounded-xl p-2">
            <img src="categories/Masalas.png" alt="Masalas" className="mb-10 h-36 w-36 rounded-xl transition-all duration-500 hover:scale-110" />
            <h3 className="mb-4 text-center hover:underline">Masalas</h3>
          </div>
          <div className="md:flex hidden flex-col items-center border rounded-xl p-2">
            <img src="categories/flour.png" alt="flour" className="mb-10 h-36 w-36 rounded-xl transition-all duration-500 hover:scale-110" />
            <h3 className="mb-4 text-center hover:underline">Powder</h3>
          </div> 
        </div>
        
      </section>

      {/* section 6 */}
      <section className="mt-10 mb-14 max-h-svh w-screen bg-neutral-200 relative text-black dark:border-white">
        <div className="flex flex-col items-center justify-center">
          <img src="categories/recipes.png" alt="recipes" className="max-h-96 relative top-0" /> 
          <h1 className="py-4 text-5xl text-center">Delicious Recipes</h1>      
          <button className="px-8 py-3 md:w-1/6 mt-5 mb-10 border border-black text-xl rounded-full hover:bg-black hover:text-white">Explore All</button>  
        </div> 
      </section>

      {/* section 7 */}
      <section className="md:px-8 px-4">
        <h2 className="text-3xl">Shop By Lifestyle</h2>
        <div className="flex justify-between md:justify-evenly md:gap-8 gap-4 px-2 py-8">
          <div className="w-28 md:w-48 flex flex-col items-center cursor-grab gap-2">
            <img src="icons/vegan-icon.png" alt="1" className="p-3 border rounded-full px bg-green-300" />
            <h2 className="text-center text-lg hover:underline font-medium">Vegan</h2>
            <h6 className="text-center text-sm px-4">Plant based goodness</h6>
          </div>
          <div className="w-28 md:w-48 flex flex-col items-center cursor-grab gap-2">
            <img src="icons/Gluten-free.png" alt="2" className="p-3 border rounded-full px bg-slate-300" />
            <h2 className="text-center text-lg hover:underline font-medium">Gluten free</h2>
            <h6 className="text-center text-sm px-4">Only whole foods that dont contain gluten</h6>
          </div>
          <div className="w-28 md:w-48 md:flex hidden flex-col items-center cursor-grab gap-2">
            <img src="icons/Paleo.png" alt="3" className="p-3 border rounded-full px bg-blue-300" />
            <h2 className="text-center text-lg hover:underline font-medium">Paleo</h2>
            <h6 className="text-center text-sm px-4">Ancient Ingredients, modern flavors</h6>
          </div>
          <div className="w-28 md:w-48 md:flex hidden flex-col items-center cursor-grab gap-2">
            <img src="icons/Keto.png" alt="4" className="p-3 border rounded-full px bg-pink-300" />
            <h2 className="text-center text-lg hover:underline font-medium">Keto</h2>
            <h6 className="text-center text-sm px-4">Good fats served in flavor-forward food</h6>
          </div>
        </div>
      </section>

      {/* section 8 */}
      <section className="md:px-8 px-4 py-8 mt-8 text-black">
        <div className="flex w-full justify-between flex-wrap gap-4">
          <div id="section-box" className="w-full max-h-80 rounded-2xl relative">
            <img src="image1.png" alt="left-img" className="max-h-80 w-full  rounded-2xl"/>
            <div className="absolute flex flex-col bottom-2 px-8 items-start justify-center w-full mb-10">
              <h6 className="text-sm py-2">Whole Grain</h6>
              <h1 className="pb-2 text-4xl">Bakery</h1>
              <h4 className="py-2 text-lg">Limited Availability</h4>
            </div>
          </div>
          <div id="section-box" className="w-full max-h-80 rounded-2xl relative">
            <img src="image2.png" alt="ryt-img" className="max-h-80 w-full  rounded-2xl"/>
            <div className="absolute flex flex-col bottom-2 px-8 items-start justify-center w-full mb-10">
              <h6 className="text-sm py-2">Hand-Picked</h6>
              <h1 className="pb-2 text-4xl">Fruit & <br /> Vegetables</h1>
              <h4 className="py-2 text-lg">Limited Availability</h4>
            </div>
          </div>
        </div>
      </section>

      {/* section 9 */}
      <section className="md:px-8 px-4 py-8 mt-8">
        <div className="flex w-full justify-between flex-wrap gap-4 md:mb-0 mb-20">
          {/* left */}
          <div id="section-box" className="max-h-svh w-full cursor-grab">
            <img src="categories/maggi.png" alt="maggi" className="h-full w-full md:px-20 md:py-8"/>
          </div>
          {/* right */}
          <div id="section-box" className="max-h-svh w-full flex flex-col gap-6 py-5 md:pl-3 px-3 md:pr-32">
            <div className="flex gap-8 text-3xl">
              <p>₹10</p>
              <s className="text-gray-500 decoration-slice">₹12</s>              
            </div>
            <h1 className="text-5xl">Maggi</h1>
            <p className="text-lg font-light">Maggi is made by a process similar to soy sauce, except with fermented wheat protein, so it has a deep, rich, and salty savoriness that cannot come from regular old salt and pepper. The best way to describe its actual flavor is “roasty.”</p>
            <h6 className="text-xl font-semibold">Style</h6>
            <div className="flex items-center gap-8">
              <button className="focus:border-black border-2 px-5 py-2 rounded-full text-xs">Regular Pack</button>
              <button className="focus:border-black border-2 px-5 py-2 rounded-full text-xs">Family Pack</button>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-6xl">₹10</div>
              <div className="flex flex-col">
                <s>₹12.00</s>
                <p className="text-gray-500">you save ₹2.00</p>
              </div>
            </div>
            <div className="border w-full h-1 "></div>
            <div className="flex gap-2 items-center justify-between flex-wrap">
              <div className="flex items-center gap-3 justify-between w-full md:w-4/12 pb-5">
                <button className="border rounded-full p-4 border-black dark:border-white hover:bg-zinc-700"><FaMinus size={15}/></button>
                <p className="text-3xl">1</p>
                <button className="border rounded-full p-4 border-black dark:border-white hover:bg-zinc-700"><FaPlus size={15}/></button>
              </div>
              <button className="border border-black w-full md:w-3/12 bg-gray-900 hover:bg-black text-white text-lg rounded-full py-3 mb-3 ">Add to cart</button>
              <button className="border border-black w-full md:w-3/12 bg-white text-black hover:bg-black hover:text-white text-lg rounded-full py-3 mb-3 ">Buy it now</button>
            </div>
          </div>
        </div>
      </section>

      {/* section 10 */}
      <section className="max-h-max w-screen bg-slate-200 mt-80 md:mt-20 text-black">
        <div className="flex items-center lg:flex-row flex-col-reverse h-full w-full">
          <div className="md:w-2/4 w-full h-full md:px-14 px-7 py-10">
            <h4 className="text-lg pb-6">Up to 50% discount</h4>
            <h5 className="md:text-6xl text-5xl  font-medium">Kitchen & Dining Summer Sale</h5>
            <p className="text-lg py-5">Common kitchen tasks include cutting food items to size, heating food on an open fire or on a stove...</p>
            <button className="border-black hover:bg-black hover:text-white border px-10 py-3 text-xl rounded-full ">Learn More</button>
          </div>
          <img src="kitchen.png" alt="kitchen" className="md:w-2/4 w-full  max-h-max"/>
        </div>
      </section>

      {/* section 11 */}
      <section className="md:px-8 px-4 py-8 mt-4">
        <div className="py-10 flex flex-col md:flex-row gap-3 md:justify-between flex-wrap ">
          <p className="text-3xl font-medium">Hot Deals</p>
          <Link href={"#"} className="underline">View all Products</Link>
        </div>
        <div className="w-full max-h-max flex gap-4 flex-wrap items-center justify-between">
          <Link href={"#"} className="max-h-max md:max-w-96 max-w-32 md:px-8 px-2 py-4 border flex flex-col items-center rounded-md">
            <img src={"/kitchen-items/cuttingboard.png"} alt={"1"} className="hover:scale-105 duration-200 transition-transform"/>
            <div className="text-start w-full flex flex-col gap-3 mt-4">
              <h6 className="md:text-lg text-sm font-light">₹110.00 <s>₹200.00</s></h6>
              <h4 className="font-semibold md:text-2xl text-lg ">Cutting Board</h4>
            </div>
          </Link>
          <Link href={"#"} className="max-h-max md:max-w-96 max-w-32 md:px-8 px-2 py-4 border flex flex-col items-center rounded-md">
            <img src={"/kitchen-items/cuttingboard.png"} alt={"1"} className="hover:scale-105 duration-200 transition-transform"/>
            <div className="text-start w-full flex flex-col gap-3 mt-4">
              <h6 className="md:text-lg text-sm font-light">₹110.00 <s>₹200.00</s></h6>
              <h4 className="font-semibold md:text-2xl text-lg ">Cutting Board</h4>
            </div>
          </Link>
          <Link href={"#"} className="max-h-max md:max-w-96 max-w-32 md:px-8 px-2 py-4 border flex flex-col items-center rounded-md">
            <img src={"/kitchen-items/cuttingboard.png"} alt={"1"} className="hover:scale-105 duration-200 transition-transform"/>
            <div className="text-start w-full flex flex-col gap-3 mt-4">
              <h6 className="md:text-lg text-sm font-light">₹110.00 <s>₹200.00</s></h6>
              <h4 className="font-semibold md:text-2xl text-lg ">Cutting Board</h4>
            </div>
          </Link>
          <Link href={"#"} className="max-h-max md:max-w-96 max-w-32 md:px-8 px-2 py-4 border flex flex-col items-center rounded-md">
            <img src={"/kitchen-items/cuttingboard.png"} alt={"1"} className="hover:scale-105 duration-200 transition-transform"/>
            <div className="text-start w-full flex flex-col gap-3 mt-4">
              <h6 className="md:text-lg text-sm font-light">₹110.00 <s>₹200.00</s></h6>
              <h4 className="font-semibold md:text-2xl text-lg ">Cutting Board</h4>
            </div>
          </Link>
          <Link href={"#"} className="max-h-max md:max-w-96 max-w-32 md:px-8 px-2 py-4 border flex flex-col items-center rounded-md">
            <img src={"/kitchen-items/cuttingboard.png"} alt={"1"} className="hover:scale-105 duration-200 transition-transform"/>
            <div className="text-start w-full flex flex-col gap-3 mt-4">
              <h6 className="md:text-lg text-sm font-light">₹110.00 <s>₹200.00</s></h6>
              <h4 className="font-semibold md:text-2xl text-lg ">Cutting Board</h4>
            </div>
          </Link>
          <Link href={"#"} className="max-h-max md:max-w-96 max-w-32 md:px-8 px-2 py-4 border flex flex-col items-center rounded-md">
            <img src={"/kitchen-items/cuttingboard.png"} alt={"1"} className="hover:scale-105 duration-200 transition-transform"/>
            <div className="text-start w-full flex flex-col gap-3 mt-4">
              <h6 className="md:text-lg text-sm font-light">₹110.00 <s>₹200.00</s></h6>
              <h4 className="font-semibold md:text-2xl text-lg ">Cutting Board</h4>
            </div>
          </Link>
          <Link href={"#"} className="max-h-max md:max-w-96 max-w-32 md:px-8 px-2 py-4 border flex flex-col items-center rounded-md">
            <img src={"/kitchen-items/cuttingboard.png"} alt={"1"} className="hover:scale-105 duration-200 transition-transform"/>
            <div className="text-start w-full flex flex-col gap-3 mt-4">
              <h6 className="md:text-lg text-sm font-light">₹110.00 <s>₹200.00</s></h6>
              <h4 className="font-semibold md:text-2xl text-lg ">Cutting Board</h4>
            </div>
          </Link>
          <Link href={"#"} className="max-h-max md:max-w-96 max-w-32 md:px-8 px-2 py-4 border flex flex-col items-center rounded-md">
            <img src={"/kitchen-items/cuttingboard.png"} alt={"1"} className="hover:scale-105 duration-200 transition-transform"/>
            <div className="text-start w-full flex flex-col gap-3 mt-4">
              <h6 className="md:text-lg text-sm font-light">₹110.00 <s>₹200.00</s></h6>
              <h4 className="font-semibold md:text-2xl text-lg ">Cutting Board</h4>
            </div>
          </Link>
        </div>
      </section>

      {/* section 12 */}
      <section className="md:px-8 px-4 py-8 mt-4">
        <div className="rounded-3xl bg-gray-950 w-full h-96 flex justify-center items-center flex-col">
          <h6 className="text-white text-lg py-7">Introducing</h6>
          <h2 className="text-6xl text-center font-semibold text-white px-20">Black Edition</h2>
          <button className="border border-white text-white hover:bg-black bg-transparent rounded-full mt-8 px-14 py-4 text-lg">Show more</button>
        </div>
      </section>

      {/* section 13 */}
      <section className="w-screen h-lvh flex flex-col gap-3 justify-center items-center text-black bg-blue-100">
        <h1 className="text-xl md:text-3xl">ORGANIC & FRESH ALWAYS</h1>
        <h3 className="text-base md:text-xl">We are proud of it</h3>
        <div className="group relative">
          <img src="maggi.png" alt="maggi plate" />
          <h2 className="group-hover:flex items-center justify-center hidden p-4 absolute text-center w-full top-28 text-2xl font-semibold">100% Wheat</h2>
        </div>
      </section>

      {/* section 14 */}
      <section className="md:px-14 px-4 py-16 md:py-28">
        <div className="w-full flex justify-evenly md:text-base text-sm flex-wrap items-start gap-11">
          <div className="md:w-1/5 w-2/5 max-h-max flex flex-col items-center">
            <img src="about-delivery/local-pickup.png" alt="local-pickup" className="w-2/3 hover:scale-105 transition-all duration-500"/>
            <h4 className="text-xl font-medium text-center mt-4 hover:underline">Local Pickup</h4>
            <p className="text-center py-2 md:text-base text-xs">Get orders faster while avoiding shipping fees</p>
          </div>
          <div className="md:w-1/5 w-2/5 max-h-max flex flex-col items-center">
            <img src="about-delivery/local-deliveries.png" alt="local-deliveries" className="w-2/3 hover:scale-105 transition-all duration-500"/>
            <h4 className="text-xl font-medium text-center mt-4 hover:underline">Local Delivery</h4>
            <p className="text-center py-2 md:text-base text-xs">100% curbside recyclable boxes </p>
          </div>
          <div className="md:w-1/5 w-2/5 max-h-max flex flex-col items-center">
            <img src="about-delivery/eater.png" alt="eater" className="w-2/3 hover:scale-105 transition-all duration-500"/>
            <h4 className="text-xl font-medium text-center mt-4 hover:underline">For Conscious Eaters</h4>
            <p className="text-center py-2 md:text-base text-xs">We are supporting small farmers and producers</p>
          </div>
          <div className="md:w-1/5 w-2/5 max-h-max flex flex-col items-center">
            <img src="about-delivery/new-food.png" alt="new-food" className="w-2/3 hover:scale-105 transition-all duration-500"/>
            <h4 className="text-xl font-medium text-center mt-4 hover:underline">Delicious & New Food</h4>
            <p className="text-center py-2 md:text-base text-xs">Feel great about what you eat</p>
          </div>
        </div>
      </section>

      {/* section 15 */}
      <section className="md:px-14 px-4">
        <div className="py-10 flex flex-col md:flex-row gap-3 md:justify-between flex-wrap ">
          <p className="text-3xl font-medium">Latest Articles</p>
          <Link href={"#"} className="underline">Visit the blog</Link>
        </div>
        <div className="flex justify-between items-start w-full flex-wrap gap-8">
          <div className="rounded-lg md:w-1/4 w-full max-h-max flex flex-col gap-5">
            <img src="/articles-contents/blog1.png" alt="1" className="transition-all duration-500 hover:scale-105 rounded-lg p-1" />
            <p className="text-gray-500">July 10, 2023</p>
            <Link href={"#"} className="hover:underline text-lg">11 Top Chef Grilling Recipes to Make This Summer</Link>
          </div>
          <div className="rounded-lg md:w-1/4 w-full max-h-max flex flex-col gap-5">
            <img src="/articles-contents/blog2.png" alt="2" className="transition-all duration-500 hover:scale-105 rounded-lg p-1" />
            <p className="text-gray-500">October 02, 2023</p>
            <Link href={"#"} className="hover:underline text-lg">10 Ideas for a Healthy High Fiber Diet</Link>
          </div>
          <div className="rounded-lg md:w-1/4 w-full max-h-max flex flex-col gap-5">
            <img src="/articles-contents/blog3.png" alt="3" className="transition-all duration-500 hover:scale-105 rounded-lg p-1" />
            <p className="text-gray-500">December 02, 2023</p>
            <Link href={"#"} className="hover:underline text-lg">Healthy Sweets?</Link>
          </div>
        </div>
      </section>

      {/* section 16 */}
      <section className="md:px-14 px-4 my-8">
        <h1 className="text-2xl font-semibold mb-8">Upcoming Events</h1>
        <div className=" flex flex-col border rounded-xl">
          <div className="px-5 py-3 flex gap-3 flex-wrap justify-between items-center w-full border-b">
            <div className="md:w-1/3 w-full flex items-center gap-3 py-4">
              <FaPlus className="size-4"/>
              <div className="w-full flex flex-col">
                <h5 className="text-base font-medium">Cooking Contest</h5>
                <h6 className="font-light flex items-start gap-2 text-sm"><IoLocationOutline size={18}/>Kolkata, West Bengal, Thursday, 3pm - 5pm</h6>
              </div>
            </div>
            <div>
              <button className="rounded-full px-10 py-3 text-white bg-gray-900 hover:bg-black dark:hover:border-white">Register</button>
            </div>            
          </div>
          <div className="px-5 py-3 flex gap-3 flex-wrap justify-between items-center w-full border-b">
            <div className="md:w-1/3 w-full flex items-center gap-3 py-4">
              <FaPlus className="size-4"/>
              <div className="w-full flex flex-col">
                <h5 className="text-base font-medium">Cooking Class</h5>
                <h6 className="font-light flex items-start gap-2 text-sm"><IoLocationOutline size={18}/>Hyderabad, Telungana, Friday, 5pm - 7pm</h6>
              </div>
            </div>
            <div>
              <button className="rounded-full px-10 py-3 text-white bg-gray-900 hover:bg-black dark:hover:border-white">Register</button>
            </div>            
          </div>
          <div className="px-5 py-3 flex gap-3 flex-wrap justify-between items-center w-full">
            <div className="md:w-1/3 w-full flex items-center gap-3 py-4">
              <FaPlus className="size-4"/>
              <div className="w-full flex flex-col">
                <h5 className="text-base font-medium">Contest</h5>
                <h6 className="font-light flex items-start gap-2 text-sm"><IoLocationOutline size={18}/>Chennai, Tamil Nadu, Saturday, 7pm - 9pm</h6>
              </div>
            </div>
            <div>
              <button className="rounded-full px-10 py-3 text-white bg-gray-900 hover:bg-black dark:border-white">Register</button>
            </div>            
          </div>
        </div>
      </section>

      {/* section 17 */}
      <section className="md:px-14 px-4 my-8">
        <div className="py-6 flex flex-col gap-3">
          <h3 className="font-semibold text-2xl">Testimonials</h3>
          <h5 className="font-light text-lg">What our clients say</h5>
        </div>
        <div className="rounded-lg bg-zinc-900 flex justify-center items-center flex-col py-8 w-full cursor-grab gap-6 text-black dark:text-white">
          <div className="flex flex-row gap-4 items-center justify-center">
            <div className=""><FaRegUserCircle size={60}/></div>
            <div className="w-full flex flex-col">
              <h2>R Sharma</h2>
              <p className="text-xs">Customer</p>
            </div>
          </div>
          <p className="text-2xl italic md:px-72 px-8 py-4 text-center">Great products. Always fresh, eco stuff that i cant find anywhere else in the city. I would not imagine my daily life without them!</p>
        </div>
      </section>
    </div>
  );
}
