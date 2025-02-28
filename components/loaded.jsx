function Loaded({ number }) {
  return (
    <div className="w-full flex flex-col gap-1 3xl:gap-2">
      <div className="h-[2px] bg-black/25">
        <div className="h-full bg-golden" style={{ width: number + "%" }} />
      </div>
      <p className="text__14">{number}%</p>
    </div>
  );
}
export default Loaded;
