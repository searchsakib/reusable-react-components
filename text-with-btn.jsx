// Just general use

<div className="grid grid-cols-1 gap-10 mt-10 px-10 py-10">
        <h2 className="text-3xl text-center font-medium">
          This is dummy text...
        </h2>
        <Link
          to="/"
          rel="noopener noreferrer"
          href="#"
          className="px-8 py-3 font-semibold rounded bg-[#05386B] text-white hover:outline  hover:bg-white hover:text-[#05386B] text-center 2xl:w-1/6 mx-auto"
        >
          Back to homepage
        </Link>
      </div>




// if this code used within a parent div with grid:

<div className="grid col-span-2 gap-10 mt-10 px-10">
            <h2 className="text-3xl text-center font-medium">
              This is dummy text...
            </h2>
            <Link
              to="/"
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-semibold rounded bg-[#05386B] text-white hover:outline  hover:bg-white hover:text-[#05386B] text-center lg:w-1/3 mx-auto"
            >
              Back to homepage
            </Link>
          </div>
