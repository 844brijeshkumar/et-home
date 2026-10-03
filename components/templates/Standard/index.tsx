export default function StandardUI() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-6">
      <div className="mb-12 flex flex-col items-center">
        <div className="w-[1px] h-4 bg-et-ivory/20 mb-4" />
        <p className="text-et-ivory/40 text-[8px] tracking-[0.4em] mb-3 uppercase">Identity</p>
        <p className="text-et-ivory tracking-[0.25em] text-xs uppercase font-light">Verified</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-et-ivory/40 text-[8px] tracking-[0.4em] mb-3 uppercase">Object</p>
        <p className="text-et-ivory tracking-[0.25em] text-xs uppercase font-light">Authentic</p>
      </div>
    </div>
  );
}
