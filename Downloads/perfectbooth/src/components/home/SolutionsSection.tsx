import { useTranslations } from 'next-intl';

export default function SolutionsSection() {
  const t = useTranslations('Solutions');

  const cards = [
    { key: 'planning', icon: 'fa-clipboard-list' },
    { key: 'evaluation', icon: 'fa-chart-pie' },
    { key: 'coordination', icon: 'fa-handshake' },
    { key: 'marketing', icon: 'fa-bullhorn' },
    { key: 'networking', icon: 'fa-users' },
    { key: 'innovation', icon: 'fa-lightbulb' }
  ];

  return (
    <section className="solutions-section">
      <div className="solutions-subtitle">{t('subtitle')}</div>
      <h2 className="solutions-title">{t('title')}</h2>
      <div className="wavy-line-center">
        <svg width="100" height="20" viewBox="0 0 100 20">
          <path d="M0,10 Q12.5,20 25,10 T50,10 T75,10 T100,10" fill="transparent" stroke="#cfa856" strokeWidth="2" />
        </svg>
      </div>
      <p className="solutions-desc">
        {t('description')}
      </p>

      <div className="solutions-grid">
        {cards.map((card, index) => (
          <div key={index} className="solution-card">
            <div className="solution-icon">
              <i className={`fa-solid ${card.icon}`}></i>
            </div>
            <h3 className="solution-card-title">{t(`cards.${card.key}.title`)}</h3>
            <p className="solution-card-desc">
              {t(`cards.${card.key}.desc`)}
            </p>
            <div className="solution-number">0{index + 1}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
