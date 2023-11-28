const Footer = () => {
  return (
    <div className="border-t border-slate-800 bg-slate-900 py-6">
      <div className="container">
        <div className="flex flex-row">
          <div className="w-full px-3">
            <p className="text-center text-slate-100">
              Made with ❤️ in Fontaine. Powered by{" "}
              <a
                className="hover:text-emerald-200"
                href="https://vercel.com"
                target="_blank"
                rel="noreferrer"
              >
                Vercel
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
