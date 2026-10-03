export default function GenerationalUI() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-6">
      <div className="flex flex-col items-center">
        <p className="text-et-muted-gold tracking-[0.3em] text-[10px] mb-6 uppercase">Generational</p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-et-muted-gold/80 to-transparent mb-8" />
        <p className="text-et-ivory/50 tracking-[0.25em] text-[8px] uppercase leading-[2.5]">
          Private Access<br />
          <span className="text-et-ivory text-[9px]">Active</span>
        </p>
      </div>
    </div>
  );
}
