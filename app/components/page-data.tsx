import { Illustration } from "./illustration";
import { Footer } from "./footer";

export function PageData({ data }: { data: any }) {
  const date = new Date().toISOString();
  return (
    <>
      <main>
        <a
          target="_blank"
          href="https://chatg.pt/weather"
          rel="noreferrer"
          className="pill"
        >
          Alusta oma ilmateatega
        </a>
        <h1>WeatherGPT</h1>
        <p className="description">
          ChatGPT plugin mis tahes asukoha ilmateate saamiseks
        </p>
        <Illustration />
        <div className="meta">
          <div className="info">
            <span>Sinu asukoht</span>
            <span className="region">
              <strong>{data.location.name}</strong>
            </span>
          </div>
          <div className="info">
            <span>Hetke temperatuur</span>
            <strong>
              {data.current.temp_c}°C / {data.current.temp_f}°F
            </strong>
          </div>
        </div>
      </main>

      <Footer>
        <p>
          Generated at {date} by{" "}
          <a
            href="https://coar.ee"
            target="_blank"
            rel="noreferrer"
          >
            Coar
          </a>
        </p>
      </Footer>
    </>
  );
}
