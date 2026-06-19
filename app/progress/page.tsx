import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";
import { progressStats } from "@/lib/mock-data";

export default function ProgressPage() {
  return (
    <div className="stack">
      <div>
        <p className="eyebrow">Progress</p>
        <h1>Friendly analytics for steady Dutch practice</h1>
        <p className="muted">A practical overview of consistency, phrases, and repeated patterns.</p>
      </div>

      <div className="grid stats-grid">
        {progressStats.map((stat) => (
          <Card key={stat.label}>
            <p className="stat-value">{stat.value}</p>
            <p className="muted">{stat.label}</p>
          </Card>
        ))}
      </div>

      <div className="grid two-columns">
        <Card title="Repeated mistake patterns">
          <div className="pattern-list">
            <div><Tag>word order</Tag><span>Appears in 3 recent answers</span></div>
            <div><Tag>dat-zin</Tag><span>Practice subordinate clause verb placement</span></div>
            <div><Tag>professional tone</Tag><span>Choose calmer workplace phrases</span></div>
          </div>
        </Card>
        <Card title="Needs revisit">
          <p className="sentence">Ik denk dat ik meer tijd nodig heb.</p>
          <p className="muted">Try saying this out loud, then make it more professional.</p>
        </Card>
      </div>
    </div>
  );
}
