import { StatTile, MockTable, PillRow, Timeline, CardGrid } from "./ui/mock";

export function VilmsPanel({ step }: { step: string }) {
  if (step === "Dashboard") {
    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatTile label="Total students" value="1,240" />
        <StatTile label="Attendance today" value="96%" />
        <StatTile label="Fee due" value="₹1.8L" />
        <StatTile label="Active classes" value="18" />
      </div>
    );
  }
  if (step === "Students") {
    return (
      <MockTable
        columns={["Name", "Class", "Status"]}
        rows={[
          ["Ananya Rao", "Grade 8 — B", "Active"],
          ["Kabir Shah", "Grade 6 — A", "Active"],
          ["Meher Kaur", "Grade 10 — C", "Active"],
          ["Ishaan Verma", "Grade 8 — B", "Pending fee"],
        ]}
      />
    );
  }
  if (step === "Attendance") {
    return (
      <div className="flex flex-col gap-3">
        <PillRow
          items={[
            { label: "Grade 8 — B · 34 present", tone: "good" },
            { label: "Grade 6 — A · 2 absent", tone: "warn" },
            { label: "Grade 10 — C · marked", tone: "good" },
          ]}
        />
        <MockTable
          columns={["Student", "Class", "Today"]}
          rows={[
            ["Ananya Rao", "Grade 8 — B", "Present"],
            ["Kabir Shah", "Grade 6 — A", "Absent"],
            ["Meher Kaur", "Grade 10 — C", "Present"],
          ]}
        />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-3 gap-3">
      <StatTile label="Avg. attendance" value="94%" />
      <StatTile label="Fee collected" value="82%" />
      <StatTile label="Reports generated" value="12" />
    </div>
  );
}

export function ShowroomPanel({ step }: { step: string }) {
  if (step === "Products") {
    return (
      <CardGrid
        items={[
          { title: "Compact Series", subtitle: "SKU 4021" },
          { title: "Studio Line", subtitle: "SKU 4032" },
          { title: "Pro Range", subtitle: "SKU 4108" },
          { title: "Signature Edition", subtitle: "SKU 4155" },
        ]}
      />
    );
  }
  if (step === "Digital Showroom") {
    return (
      <div className="grid grid-cols-[120px_1fr] gap-3">
        <div className="flex flex-col gap-2 rounded-lg border border-border bg-paper p-3">
          {["Featured", "New Arrivals", "Catalogue"].map((c) => (
            <div key={c} className="rounded-md px-2 py-1.5 text-[11px] font-medium text-ink-soft">
              {c}
            </div>
          ))}
        </div>
        <CardGrid
          items={[
            { title: "Compact Series", subtitle: "3 variants" },
            { title: "Studio Line", subtitle: "5 variants" },
          ]}
        />
      </div>
    );
  }
  if (step === "Customer") {
    return (
      <MockTable
        columns={["Customer", "Interested in", "Status"]}
        rows={[
          ["Meridian Retail", "Studio Line", "Viewing"],
          ["North Point Traders", "Pro Range", "Enquired"],
          ["Anand & Sons", "Compact Series", "Viewing"],
        ]}
      />
    );
  }
  return (
    <div className="rounded-lg border border-border bg-paper p-4">
      <div className="font-mono-ui text-[10px] uppercase tracking-wide text-ink-faint">New enquiry</div>
      <div className="mt-2 text-sm font-semibold text-ink">Meridian Retail — Studio Line</div>
      <p className="mt-1 text-sm text-ink-soft">Requesting bulk pricing for 40 units, delivery within 3 weeks.</p>
      <PillRow items={[{ label: "New", tone: "warn" }]} />
    </div>
  );
}

export function GiftingPanel({ step }: { step: string }) {
  if (step === "Catalogue") {
    return (
      <CardGrid
        items={[
          { title: "Executive Hamper", subtitle: "SKU GF-101" },
          { title: "Desk Essentials Set", subtitle: "SKU GF-114" },
          { title: "Festive Box", subtitle: "SKU GF-128" },
          { title: "Welcome Kit", subtitle: "SKU GF-133" },
        ]}
      />
    );
  }
  if (step === "Client") {
    return (
      <MockTable
        columns={["Client", "Visibility", "Status"]}
        rows={[
          ["Nimbus Technologies", "Custom catalogue", "Active"],
          ["Bluepeak Consulting", "Standard catalogue", "Active"],
          ["Fernridge Capital", "Custom catalogue", "Onboarding"],
        ]}
      />
    );
  }
  if (step === "Quote") {
    return (
      <div className="rounded-lg border border-border bg-paper p-4">
        <div className="font-mono-ui text-[10px] uppercase tracking-wide text-ink-faint">Quotation — Nimbus Technologies</div>
        <div className="mt-3 flex flex-col gap-2 text-sm">
          <div className="flex justify-between text-ink-soft"><span>Executive Hamper × 120</span><span>₹3,60,000</span></div>
          <div className="flex justify-between text-ink-soft"><span>Branding & packaging</span><span>₹48,000</span></div>
          <div className="flex justify-between border-t border-border pt-2 font-semibold text-ink"><span>Total</span><span>₹4,08,000</span></div>
        </div>
      </div>
    );
  }
  if (step === "Order") {
    return (
      <MockTable
        columns={["Order", "Client", "Status"]}
        rows={[
          ["ORD-2291", "Nimbus Technologies", "Confirmed"],
          ["ORD-2278", "Bluepeak Consulting", "In production"],
        ]}
      />
    );
  }
  return <Timeline steps={["Confirmed", "Packed", "Dispatched", "Delivered"]} activeIndex={2} />;
}

export const PRODUCT_PANELS: Record<string, React.ComponentType<{ step: string }>> = {
  vilms: VilmsPanel,
  supershowroom: ShowroomPanel,
  "gifting-solutions": GiftingPanel,
};
