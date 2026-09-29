import { useLang } from '../../i18n/useLang';

export default function TimelineSection({ goTo }) {
  const { t, content } = useLang();
  const { parcours } = content;

  return (
    <section className="timeline" aria-labelledby="timeline-title">
      <div className="timeline__heading">
        <p className="apple-eyebrow">{t.timeline.eyebrow}</p>
        <h2 id="timeline-title">{t.timeline.title}</h2>
      </div>

      <ol className="timeline__list">
        {parcours.map((step) => (
          <li key={step.date} className={`timeline__step timeline__step--${step.statut}`}>
            <span className="timeline__dot" aria-hidden="true" />
            <button type="button" className="timeline__card" onClick={() => goTo(step.page)}>
              <span className="timeline__meta">
                <span className="timeline__date">{step.date}</span>
                {step.statut === 'actuel' && <span className="timeline__badge">{t.timeline.current}</span>}
              </span>
              <span className="timeline__title">{step.titre}</span>
              <span className="timeline__place">{step.lieu}</span>
              <span className="timeline__type">{step.type}</span>
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
