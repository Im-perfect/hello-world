import Link from "next/link";
import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";
import { mistakes, weeklyProgress } from "@/lib/mock-data";

export default function DashboardPage() {
  const totalMinutes = weeklyProgress.reduce((sum, day) => sum + day.minutes, 0);
  const revisitCount = mistakes.filter((mistake) => mistake.revisitStatus !== "Improving").length;

  return (
    <div className="stack">
      <section className="hero">
        <div>
          <p className="eyebrow">Today’s Dutch practice</p>
          <h1>Build one useful work sentence today.</h1>
          <p>
            A calm 30-minute session with realistic Dutch, focused feedback, and weak points to revisit later.
          </p>
        </div>
        <Link className="button" href="/practice">
          Start session
        </Link>
      </section>

      <div className="grid two-columns">
        <Card title="This week’s progress">
          <div className="progress-bars">
            {weeklyProgress.map((day) => (
              <div key={day.day} className="progress-row">
                <span>{day.day}</span>
                <div className="bar" aria-label={`${day.minutes} minutes practiced`}>
                  <div style={{ width: `${Math.min(day.minutes, 30) * 3.33}%` }} />
                </div>
                <strong>{day.minutes}m</strong>
              </div>
            ))}
          </div>
          <p className="muted">Total so far: {totalMinutes} minutes</p>
        </Card>

        <Card title="Mistakes to revisit">
          <p className="large-number">{revisitCount}</p>
          <p className="muted">Focus on word order and dat-zinnen in your next short review.</p>
          <div className="tag-row">
            <Tag>dat-zin</Tag>
            <Tag>word order</Tag>
          </div>
          <Link className="text-link" href="/mistakes">
            Open mistake bank →
          </Link>
        </Card>
      </div>

      <Card title="Sentence of the day">
        <p className="sentence">Ik verwacht dat ik dit morgen goed kan afronden.</p>
        <p className="muted">Placeholder: later this can adapt to your repeated mistake patterns.</p>
      </Card>
    </div>
  );
}
