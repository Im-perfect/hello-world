"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";
import { vocabulary } from "@/lib/mock-data";

export default function PracticePage() {
  const [answer, setAnswer] = useState("Ik denk ik heb meer tijd nodig.");
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div className="stack narrow">
      <div>
        <p className="eyebrow">Practice session</p>
        <h1>Polite workplace Dutch</h1>
        <p className="muted">Write a useful sentence, submit it, and review mock AI feedback.</p>
      </div>

      <Card title="Realistic situation">
        <p>
          Your manager asks if a task will be finished today. You need one more day. Explain this politely in Dutch.
        </p>
      </Card>

      <Card title="Useful vocabulary">
        <div className="vocab-list">
          {vocabulary.map((item) => (
            <div key={item.dutch}>
              <strong>{item.dutch}</strong>
              <span>{item.english}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Sentence-building prompt">
        <label htmlFor="answer">Your Dutch answer</label>
        <textarea
          id="answer"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          rows={5}
          placeholder="Type your Dutch sentence here..."
        />
        <button className="button" type="button" onClick={() => setShowFeedback(true)}>
          Submit for feedback
        </button>
      </Card>

      {showFeedback ? (
        <Card title="Mock AI feedback" className="feedback-card">
          <div className="feedback-block">
            <h3>Corrected</h3>
            <p>Ik denk dat ik meer tijd nodig heb.</p>
          </div>
          <div className="feedback-block">
            <h3>More natural</h3>
            <p>Ik denk dat ik nog wat extra tijd nodig heb.</p>
          </div>
          <div className="feedback-block">
            <h3>More professional</h3>
            <p>Ik verwacht dat ik nog wat extra tijd nodig heb om dit goed af te ronden.</p>
          </div>
          <div className="feedback-block">
            <h3>Explanation</h3>
            <p>
              After “ik denk”, Dutch usually uses “dat”. In the subordinate clause, the verb order changes.
            </p>
          </div>
          <div className="tag-row">
            <Tag>dat-zin</Tag>
            <Tag>word order</Tag>
          </div>
        </Card>
      ) : null}
    </div>
  );
}
