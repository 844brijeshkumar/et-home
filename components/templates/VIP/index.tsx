export default function VIPUI() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-6">
      <div className="mb-14 flex flex-col items-center">
        <p className="text-et-ivory tracking-[0.25em] text-xs uppercase mb-3 font-light">Recognized</p>
        <div className="h-[1px] w-8 bg-et-muted-gold/50 my-3" />
        <p className="text-et-muted-gold tracking-[0.3em] text-[9px] uppercase">Your Reserve</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-et-ivory/40 text-[8px] tracking-[0.4em] mb-3 uppercase">Private Room</p>
        <p className="text-et-ivory tracking-[0.25em] text-xs uppercase font-light">Available</p>
      </div>
    </div>
  );
}
