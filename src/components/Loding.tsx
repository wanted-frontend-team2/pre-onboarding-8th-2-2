import loadingImg from '../images/loading.svg';

function Loding() {
  return (
    <section>
      <p>Loading...</p>
      <img src={loadingImg} alt="loding" />
    </section>
  );
}

export default Loding;
