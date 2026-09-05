export default function Sidebar() {
  return (
    <aside className="m-4 flex w-20 flex-col items-center justify-between rounded-2xl bg-[#7C7A5C] py-6">
      {/* Botón de inicio, resaltado como activo */}
      <div className="flex flex-col items-center gap-6">
        <button
          aria-label="Inicio"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5F5D45] text-[#F2EFE9]"
        >
          <HomeIcon />
        </button>

        <nav className="flex flex-col items-center gap-6 text-[#DAD8C8]">
          <button aria-label="Mensajes" className="transition-colors hover:text-white">
            <ChatIcon />
          </button>
          <button aria-label="Documentos" className="transition-colors hover:text-white">
            <DocumentIcon />
          </button>
        </nav>
      </div>

      {/* Ícono de información en la parte inferior */}
      <button aria-label="Información" className="text-[#DAD8C8] transition-colors hover:text-white">
        <InfoIcon />
      </button>
    </aside>
  );
}

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1.1-4.4A8 8 0 1 1 21 12Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" strokeLinejoin="round" />
      <path d="M14 3v5h5" strokeLinejoin="round" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" strokeLinecap="round" />
      <circle cx="12" cy="8" r="0.5" fill="currentColor" />
    </svg>
  );
}
