export default function PropertyDetails() {
  return (
    <div className="mt-8 lg:mt-0">
      <div className="w-full text-[11px] px-4 lg:pl-12 3xl:pl-16 mt-3 3xl:mt-4 tracking-[1.5px]">
        <p>
          A beautiful property located in a prime location with all modern
          amenities. A beautiful property located in a prime location with all
          modern amenities. A beautiful property located in a prime location
          with all modern amenities. A beautiful property located in a prime
          location with all modern amenities. A beautiful property located in a
          prime location with all modern amenities. A beautiful property located
          in a prime location with all modern amenities. A beautiful property
          located in a prime location with all modern amenities. A beautiful
          property located in a prime location with all modern ame...
        </p>
        <button className="uppercase mt-1 text-white/25 hover:text-white">
          view full description
        </button>
      </div>
      <div className="lg:pl-12 3xl:pl-16 pl-4 mt-[12px] 3xl:mt-5 text-[11px] tracking-[1.5px]">
        <div className="grid grid-cols-3">
          {[
            ["Property Type", "Penthouse"],
            ["Tenure", "Shared Ownership"],
            ["Year of build", "1996"],
            ["Architecture", "Art Deco"],
          ].map(([title, value]) => (
            <div key={title} className="mb-[0.5rem]">
              <h4 className="opacity-25 uppercase">{title}</h4>
              <p>{value}</p>
            </div>
          ))}
          {[
            ["Property sq.ft", "3485 sq.ft"],
            ["Lot size (land)", "6 Acres"],
            ["Air conditioning", "No"],
            ["Gymnasium", "No"],
          ].map(([title, value]) => (
            <div key={title} className="mb-[0.5rem]">
              <h4 className="opacity-25 uppercase">{title}</h4>
              <p>{value}</p>
            </div>
          ))}
          {[
            ["Bedrooms", "5"],
            ["Bathrooms", "4"],
            ["Reception rooms", "2"],
            ["Other rooms", "3"],
          ].map(([title, value]) => (
            <div key={title} className="mb-[0.5rem]">
              <h4 className="opacity-25 uppercase">{title}</h4>
              <p>{value}</p>
            </div>
          ))}
        </div>
        <button className="uppercase mt-1 text-white/25 hover:text-white">
          view all features
        </button>
      </div>
    </div>
  );
}
