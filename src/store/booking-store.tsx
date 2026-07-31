import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

interface BookingIntent {
  serviceId?: string;
  packageId?: string;
  branchId?: string;
  source?: string;
}

interface BookingContextValue {
  open: boolean;
  intent: BookingIntent;
  openBooking: (intent?: BookingIntent) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [intent, setIntent] = useState<BookingIntent>({});

  const openBooking = useCallback((next: BookingIntent = {}) => {
    setIntent(next);
    setOpen(true);
  }, []);
  const closeBooking = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ open, intent, openBooking, closeBooking }), [open, intent, openBooking, closeBooking]);
  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside <BookingProvider>");
  return ctx;
}
