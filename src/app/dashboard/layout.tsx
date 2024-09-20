export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-12 grid-rows-12 gap-4 m-8 w-full">
            {children}
        </div>
    );
  }
  