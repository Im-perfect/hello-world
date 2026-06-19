import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";
import { mistakes } from "@/lib/mock-data";

export default function MistakeBankPage() {
  return (
    <div className="stack">
      <div>
        <p className="eyebrow">Mistake bank</p>
        <h1>Small patterns to revisit</h1>
        <p className="muted">Your saved corrections become focused review prompts over time.</p>
      </div>

      <div className="mistake-list">
        {mistakes.map((mistake) => (
          <Card key={mistake.id}>
            <div className="mistake-header">
              <h2>{mistake.original}</h2>
              <span className="status">{mistake.revisitStatus}</span>
            </div>
            <p><strong>Corrected:</strong> {mistake.corrected}</p>
            <p className="muted">{mistake.explanation}</p>
            <div className="tag-row">
              {mistake.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
