export default function Container({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`w-full max-w-[1200px] mx-auto px-[5%] ${className}`}>
      {children}
    </div>
  );
}
