const GoogleMap = () => {
  return (
    <section className="bg-white sm:px-0 px-3 sm:pt-0 pt-3">
      <div className="overflow-hidden !bg-none w-full">
        <iframe
          className="w-full lg:h-[600px] md:h-[520px] h-[380px]"
          src="https://maps.google.com/maps?width=534&amp;height=646&amp;hl=en&amp;q=Man%20City,%20England,%20UK&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Google Map"
        ></iframe>
      </div>
    </section>
  );
};

export default GoogleMap;
