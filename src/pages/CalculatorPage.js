import Calculator from '../components/Calculator/Calculator';

function CalculatorPage() {
  return (
    <div className="site-content">
      <section>
        <h2>Let&apos;s do some math</h2>
      </section>
      <section>
        <Calculator />
      </section>
    </div>
  );
}

export default CalculatorPage;
