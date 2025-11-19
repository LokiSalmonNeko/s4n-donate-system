import Link from 'next/link';

export default function Home() {
  return (
    <div className="ts-center">
      <div className="ts-space is-large"></div>
      <div className="ts-container is-narrow">
        <div className="ts-header is-huge is-heavy">S4N Donate System</div>
        <div className="ts-text is-secondary">簡單、快速、開源的實況主贊助平台</div>

        <div className="ts-space is-large"></div>

        <div className="ts-grid is-relaxed is-2-columns">
          <div className="column">
            <Link href="/donate" className="ts-button is-fluid is-primary is-large">
              我要贊助
            </Link>
          </div>
          <div className="column">
            <Link href="/dashboard" className="ts-button is-fluid is-secondary is-large">
              實況主後台
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
